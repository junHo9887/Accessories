import React from 'react'
import {Link} from "react-router-dom"

function Header() {
  return (
    <section className='header'>
      <Link to="/"><img src='./img/로고.png'/></Link>
    <div className='item'>
      <Link to="Main.js" >NEW</Link>
      <Link to="Main1.js" >HOT</Link>
      <Link to="Login.js" >로그인</Link>
      <Link to="Join.js">회원가입</Link>
    </div>
    </section>
  )
}

export default Header