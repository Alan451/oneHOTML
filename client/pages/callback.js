import Cookies from 'cookies'
import axios from 'axios'

function callbackHandler({accessToken,statusCode}) {
  if(statusCode==401)return <div>please try again...</div>
  // res.redirect('/profile')
  return <div>{accessToken}</div>
}
export async function getServerSideProps(context) {
  const cookies = new Cookies(context.req,context.res)
  const res = await axios.post('http://auth_server:5000/callback',
    {
      code:context.query.code,
      state:context.query.state,
    }
  )
  const data = res.data
  
  if(data.status_code==401)return {
    props: {'accessToken':"", 'statusCode':data.status_code}
  }
  cookies.set('accessToken', data.access_token, {
    httpOnly: true,
    sameSite: 'lax'
  })
  cookies.set('statusCode', data.status_code, {
    httpOnly: true,
    sameSite: 'lax'
  })  
  return {
    props: {'accessToken':data.access_token, 'statusCode':data.status_code} // will be passed to the page component as props
  }
}

export default callbackHandler;