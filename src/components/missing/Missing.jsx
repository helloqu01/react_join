import React from 'react'
import { Link } from 'react-router-dom';

const Missing = ( ) => {
  

  return (
    <div >
       <h1>페이지를 찾을 수 없습니다</h1>
      
        <p><Link   to={"/"}  >홈으로</Link></p>
    </div>

  )
}

export default Missing