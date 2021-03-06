from functools import wraps
import json
import sys
import logging
import requests
from os import environ as env
from six.moves.urllib.request import urlopen

from dotenv import load_dotenv, find_dotenv
from flask import Flask, request, jsonify, _request_ctx_stack,session,redirect
from flask_cors import cross_origin,CORS
from jose import jwt

import http.client
ENV_FILE = find_dotenv()
if ENV_FILE:
    load_dotenv(ENV_FILE)
AUTH0_DOMAIN = env.get("AUTH0_DOMAIN")
API_IDENTIFIER = env.get("API_IDENTIFIER")
CLIENT_SECRET = env.get("CLIENT_SECRET")
CLIENT_ID = env.get("CLIENT_ID")
ALGORITHMS = ["RS256"]
APP = Flask(__name__)
APP.config["SECRET_KEY"] = "OCML3BRawWEUeaxcuKHLpw"
logging.basicConfig(level=logging.DEBUG)

CORS(APP, supports_credentials=True)


class AuthError(Exception):
    def __init__(self, error, status_code):
        self.error = error
        self.status_code = status_code


@APP.errorhandler(AuthError)
def handle_auth_error(ex):
    response = jsonify(ex.error)
    response.status_code = ex.status_code
    return response


def get_token_auth_header():
    """Obtains the access token from the Authorization Header
    """
    auth = request.headers.get("Authorization", None)
    if not auth:
        raise AuthError({"code": "authorization_header_missing",
                        "description":
                            "Authorization header is expected"}, 401)

    parts = auth.split()

    if parts[0].lower() != "bearer":
        raise AuthError({"code": "invalid_header",
                        "description":
                            "Authorization header must start with"
                            " Bearer"}, 401)
    elif len(parts) == 1:
        raise AuthError({"code": "invalid_header",
                        "description": "Token not found"}, 401)
    elif len(parts) > 2:
        raise AuthError({"code": "invalid_header",
                        "description":
                            "Authorization header must be"
                            " Bearer token"}, 401)

    token = parts[1]
    return token


def requires_scope(required_scope):
    """Determines if the required scope is present in the access token
    Args:
        required_scope (str): The scope required to access the resource
    """
    token = get_token_auth_header()
    unverified_claims = jwt.get_unverified_claims(token)
    if unverified_claims.get("scope"):
        token_scopes = unverified_claims["scope"].split()
        for token_scope in token_scopes:
            if token_scope == required_scope:
                return True
    return False


def requires_auth(f):
    """Determines if the access token is valid
    """
    @wraps(f)
    def decorated(*args, **kwargs):
        token = get_token_auth_header()
        jsonurl = urlopen("https://"+AUTH0_DOMAIN+"/.well-known/jwks.json")
        jwks = json.loads(jsonurl.read())
        try:
            unverified_header = jwt.get_unverified_header(token)
        except jwt.JWTError:
            raise AuthError({"code": "invalid_header",
                            "description":
                                "Invalid header. "
                                "Use an RS256 signed JWT Access Token"}, 401)
        if unverified_header["alg"] == "HS256":
            raise AuthError({"code": "invalid_header",
                            "description":
                                "Invalid header. "
                                "Use an RS256 signed JWT Access Token"}, 401)
        rsa_key = {}
        for key in jwks["keys"]:
            if key["kid"] == unverified_header["kid"]:
                rsa_key = {
                    "kty": key["kty"],
                    "kid": key["kid"],
                    "use": key["use"],
                    "n": key["n"],
                    "e": key["e"]
                }
        if rsa_key:
            try:
                payload = jwt.decode(
                    token,
                    rsa_key,
                    algorithms=ALGORITHMS,
                    audience=API_IDENTIFIER,
                    issuer="https://"+AUTH0_DOMAIN+"/"
                )
            except jwt.ExpiredSignatureError:
                raise AuthError({"code": "token_expired",
                                "description": "token is expired"}, 401)
            except jwt.JWTClaimsError:
                raise AuthError({"code": "invalid_claims",
                                "description":
                                    "incorrect claims,"
                                    " please check the audience and issuer"}, 401)
            except Exception:
                raise AuthError({"code": "invalid_header",
                                "description":
                                    "Unable to parse authentication"
                                    " token."}, 401)

            _request_ctx_stack.top.current_user = payload
            return f(*args, **kwargs)
        raise AuthError({"code": "invalid_header",
                        "description": "Unable to find appropriate key"}, 401)
    return decorated


# Controllers API
@APP.route("/api/public")
@cross_origin(headers=["Content-Type", "Authorization"])
def public():
    """No access token required to access this route
    """
    response = "Hello from a public endpoint! You don't need to be authenticated to see this."
    return jsonify(message=response)


@APP.route("/api/userinfo")
@cross_origin(headers=["Content-Type", "Authorization"])
@cross_origin(headers=["Access-Control-Allow-Origin", "http://nextjs-ui:3000"])
@requires_auth
def userinfo():
    token = get_token_auth_header()
    res = requests.get("https://"+AUTH0_DOMAIN+"/userinfo",headers={
        'Authorization': 'Bearer '+token,
    })
    data = res.json()
    print(data,file=sys.stdout)
    return jsonify(userData=data)

@APP.route("/callback",methods=['POST','OPTIONS'])
@cross_origin(headers=["Access-Control-Allow-Origin", "http://nextjs-ui:3000"])
def gettokens():
    auth_code = json.loads(request.data)
    payload={
        'grant_type':'authorization_code',
        'client_id':CLIENT_ID,
        'client_secret': CLIENT_SECRET,
        'code':auth_code.get('code'),
        'audience':API_IDENTIFIER,
        'redirect_uri':'http://localhost:3000/callback'
    }
    res = requests.post("https://"+AUTH0_DOMAIN+"/oauth/token",json = payload)
    data = res.json()
    try:
        session['ACCESS_TOKEN']=data['access_token']
        status_code = 201
        return jsonify(access_token=data['access_token'],status_code=status_code)
    except:
        status_code = 401
        return jsonify(status_code=status_code)
        
if __name__ == "__main__":
    APP.run(host='0.0.0.0',port=5000, debug=True)


