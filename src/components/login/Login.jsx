import React from 'react'
import './login.css'
import {useState,useEffect,useRef} from 'react'
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
  const [errMsg, setErrMsg] = useState('');
  useEffect(() => {
    setErrMsg('');
}, [Name, Password])
const userRef = useRef();
const errRef = useRef();

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
  console.log(res[0].status);
  const roles = [res[0].status, res[0].status2];
  console.log(roles);
  setAuth({ Name, Password, roles });
  setName('');
  setPassword('');
  navigate(from, { replace: true });
  }).catch((err)=>{
    if (!err?.response) {
      setErrMsg('No Server Response');
  } else if (err.response?.status === 400) {
      setErrMsg('Missing Username or Password');
  } else if (err.response?.status === 401) {
      setErrMsg('Unauthorized');
  } else {
      setErrMsg('Login Failed');
  }
  errRef.current.focus();
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
<p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
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
        <p><Link to={"/"}  >home</Link></p>
    </div>

  )
}

export default Login