import React from 'react'
import {Link} from 'react-router-dom'

function Login() {
  return (
    <section className='login'>
      <div className='login_item'>
        <h1>LOGIN</h1>
        <nav>
        <p>아이디</p>
        <input placeholder='아이디를 입력해주세요' type='id'></input>
        <p>패스워드</p>
        <input placeholder='비밀번호를 입력해주세요' type='password'></input>
         <input type='checkbox' className='check'></input><p className='idid'>아이디저장</p>
        <ul>
          <Link to=""><li>아이디 찾기</li></Link>
          <Link to=""><li>비밀번호 찾기</li></Link>
          <Link to=""><li>회원가입</li></Link>
        </ul>
        </nav>
        <button className='login_btn' >로그인</button>
      </div>

    </section>
  )
}

export default Login