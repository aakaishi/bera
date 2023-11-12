import './Form.css';
import {useState} from 'react';
import TextField from '../TextField';
import Button from '../Button';
import ComboBox from '../ComboBox';

const Form = (props) => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [userType, setUserType] = useState('')

  const saveContent = (event) => {
    event.preventDefault(); // prevent page refresh (default behavior)
    props.addNewUser({
      name,
      email,
      login,
      password,
      userType
    })

    setName('')
    setEmail('')
    setLogin('')
    setPassword('')
    setUserType('')    

  }

  return (
    <section className='form'>
      <h3>Login form</h3>
      <form onSubmit={saveContent}>
        <TextField required={true} 
                   label='Full name'
                   placeholder='Enter your name' 
                   type='text'
                   value={name} 
                   onChange={value => setName(value)} />
        <TextField required={true}
                   label='Em@il'             
                   placeholder='Enter your email'
                   type='text'
                   value={email}
                   onChange={value => setEmail(value)} />
        <TextField required={true}
                   label='Login'
                   placeholder='Enter your login'
                   type='text'
                   value={login}
                   onChange={value => setLogin(value)} />
        <TextField required={true}
                   label='Password'
                   placeholder='Enter your password'
                   type='password'
                   value={password}
                   onChange={value => setPassword(value)} /> 
        <ComboBox  required={true}
                   label='User type'
                   userType={props.userType}
                   value={userType}
                   onChangeValue={value => setUserType(value)} />                  
        <Button>
          Add User
        </Button> 
      </form>
    </section>
  );
}

export default Form;  




