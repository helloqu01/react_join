import React from 'react'
import './login.css'
import {useState} from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = ( ) => {

  const {setAuth} =useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
 


  const [IP, setIP] = useState("localhost");
  const [Name, setName] = useState('');
  const [Password, setPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    fetch("http://"+IP+":3001/api/login", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          name: Name,
          password: Password
        },
    }),
  }).then(response =>  response.json())
  .then((res) => {
  console.log(res);
  setAuth(res);
  navigate(from, { replace: true });
  });

  };

  const onNameHandler = (event) => {
    setName(event.currentTarget.value);
  }
  const onpasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  }


  return (
    <div >

        <h1>로그인</h1>
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
            <div className='form-actions'>
                <button>Submit</button>
            </div>
        </form>
        <p><Link to={"/"}  >Join_form</Link></p>
    </div>

  )
}

export default Login