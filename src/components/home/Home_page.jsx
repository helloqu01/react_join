import React from 'react'
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Home_page = ( ) => {
  

  const {setAuth} =useAuth();
  return (
    <div >
       <h1>메인페이지</h1>
      
        <p><Link   to={"/Missing"}  >Missing</Link></p>
        <p><Link   to={"/Login"}  >Login</Link></p>
        <p><Link   to={"/Join_form"}  >Join_form</Link></p>
        <p><Link   to={"/Protect_page"}  >Protect_page</Link></p>
        <button>로그아웃</button>
    </div>

  )
}

export default Home_page