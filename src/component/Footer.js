import React from 'react'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <section className='footer'>
      <ul>
        <Link to=""><li>회사소개</li></Link>
        <Link to=""><li>이용약관</li></Link>
        <Link to=""><li>개인정보처리방침</li></Link>
        <Link to=""><li>이용안내</li></Link>
        <Link to=""><li>제휴문의</li></Link>
      </ul>
      <div className='footer_item'>
        <Link to="App.js"><img src='./img/로고.png'/></Link>
        <div className='right'>
          <nav>
            <p>상호:비엘코리아/스마트보이</p>
            <p>대표:홍지희</p>
            <p>사업자등록번호:116-14-00409</p>
          </nav>
          <nav>
            <p>주소:61697 광주광역시 남구 서문대로824번길 3 (주월동) SH빌딩 4층. (반품주소)</p>
            <p>대표전화 : 1644-9693</p>
          </nav>
          <nav>
            <p>통신판매업 신고 : 2016-광주남구-0204</p>
            <p>개인정보관리책임자 : 조원규</p>
            <p>이메일 : bmkorea01@naver.com</p>
          </nav>
          <nav>
            <p>COPYRIGHT © 비엠코리아/스마트보이 ALL RIGHTS RESERVED. HOSTING CAFE24DESIGNED By DFLOOR</p>
          </nav>
        </div>
      </div>
    </section>
  )
}

export default Footer