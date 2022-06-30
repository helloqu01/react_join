import React from 'react'
import './join_form.css'
import {useState} from 'react'
import { Link } from 'react-router-dom';

const Join_form = ( ) => {
  const [IP, setIP] = useState("localhost");
  const [Name, setName] = useState('');
  const [Password, setPassword] = useState('');
  const [Email, setEmail] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    fetch("http://"+IP+":3001/api/join", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          name: Name,
          password: Password,
          email: Email
        },
    }),
    

  }).then(response =>  response.json())
  .then((res) => {
  console.log(res);
  });

  };

  const onNameHandler = (event) => {
    setName(event.currentTarget.value);
  }
  const onpasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  }
  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  }

  return (
    <div >
       <h1>회원가입</h1>
         <form onSubmit={e => onSubmit(e)}>
            <div className='control-group'>
                <div className='form-control'>
                <label htmlFor='Name'>Name</label>
                <input type='text' id='Name' value={Name} onChange={onNameHandler}/>
                </div>
                <div className='form-control'>
                <label htmlFor='Password'>password</label>
                <input type='Password' id='Password' value={Password} onChange={onpasswordHandler}/>
                </div>
            </div>
            <div className='form-control'>
                <label htmlFor='Email'>email</label>
                <input type='Email' id='Email'  value={Email} onChange={onEmailHandler}/>
            </div>
            <div className='form-actions'>
                <button>Submit</button>
            </div>
        </form>
        <p><Link   to={"/Login"}  >login</Link></p>
        <p><Link   to={"/"}  >home</Link></p>
    </div>

  )
}

export default Join_form