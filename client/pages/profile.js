import Cookies from 'cookies'
const baseurl= 'http://auth_server:5000'
import Cookies from 'cookies'


function Profile({req,res}) {  
  const cookies = new Cookies(req,res)
  const accessToken = cookies.get('accessToken')
  return <div>
      <h1>{accessToken}</h1>
    </div>
}

export default Profile;