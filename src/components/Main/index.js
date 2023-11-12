import './Main.css';
import { useState } from 'react';
import Form from '../Form/UserForm.js';   

const Main = (props) => {

  const [users, setUsers] = useState([])

  const addNewUser = (user) => {
    setUsers([...users, user])
  }

  return (
    <main className='main'>
      <section className='title'>
        <h1>Content title</h1>
      </section>  
      <section className='content'>
        <Form userType={props.userType} addNewUser={user => addNewUser(user)} />
      </section>  
    </main>
  )
}

export default Main;