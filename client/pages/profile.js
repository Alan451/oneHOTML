import fetch from 'isomorphic-unfetch'
const baseurl= 'http://auth_server:5000'

function Profile(props) {
  console.log(props)
  if(!props.data)return <div>Not Authenticated</div>
  return <div>
      <h1>{props.data}</h1>
    </div>
}

Profile.getInitialProps = async function(){
  const res = await fetch(new URL('api/userinfo',baseurl))
  const data = await res.json();
  return{
    data
  }
}
export default Profile;