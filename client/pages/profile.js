import Cookies from 'cookies'
// const baseurl= 'http://auth_server:5000'


function Profile({accessToken,statusCode}) {
  if(statusCode === 401) return <div>auth error</div> 
  return <div>
      <h1>{accessToken}</h1>
    </div>
}
export async function getServerSideProps({req,res}) {
  const cookies = new Cookies(req,res)
  const accessToken = cookies.get('accessToken')
  const statusCode = cookies.get('statusCode')
  console.log(accessToken,statusCode)
  return {
    props: {'accessToken':accessToken,'statusCode':statusCode} // will be passed to the page component as props
  }
}
export default Profile;