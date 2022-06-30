import React from 'react'
import { Link } from 'react-router-dom';

const Protect_page = ( ) => {
  

  return (
    <div >
       <h1>회원만 볼 수 있는 페이지</h1>
      
        <p><Link   to={"/"}  >home</Link></p>
    </div>

  )
}

export default Protect_page