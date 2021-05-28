import Cookies from 'cookies'
import axios from 'axios'
// const baseurl= 'http://auth_server:5000'


function Profile({userData,statusCode}) {
  if(statusCode === 401) return <div>auth error</div> 
  return <div>
      <h1>{userData}</h1>
    </div>
}
export async function getServerSideProps({req,res}) {
  const cookies = new Cookies(req,res)
  const accessToken = cookies.get('accessToken')
  const statusCode = cookies.get('statusCode')
  const response = await axios.get(
    'http://auth_server:5000/api/userinfo',
    {
      headers: {
        'Authorization' : `Bearer ${accessToken}`,
      }
    }
  )
  return {
    props: {'userData':response.data.userData.name,'statusCode':statusCode} // will be passed to the page component as props
  }
}
export default Profile;