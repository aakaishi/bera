import './User.css';

const User = ({name,email,login,userType}) => {
  return (
    <div className='user'>
       <p>{name}</p>
       <p>{email}</p>
       <p>{login}</p>
       <p>{userType}</p>
    </div>
 )
}

export default User;
