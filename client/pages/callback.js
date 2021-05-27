import { useRouter } from 'next/router'
import fetch from 'isomorphic-unfetch'
import axios from 'axios'
import Cookies from 'cookies'



async function callbackHandler() {
  const router = useRouter()
  const {code,state} = router.query
  try{
    const res = await axios.post('http://localhost:5000/callback',{code:code,state:state})
    const {access_token,status_code} = JSON.parse(res)
    if(status_code==401)return <div>Error in authentication</div>
    console.log(access_token)
    return <div>{access_token}</div>
  }
  catch(error){
    return <div>{error}</div>
  }
  
}


export default callbackHandler;