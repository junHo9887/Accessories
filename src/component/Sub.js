import React from 'react';
import { Link, useParams } from 'react-router-dom';
import list_n1 from '../Data/proDuctData_n';
import list_b1 from '../Data/proDuctData_b';
import list_h1 from '../Data/proDuctData_h';
import '../css/Sub.css'


function Sub() {
  const { itemId } = useParams();
  // 전체 데이터 배열에서 id 값이 일치하는 아이템을 찾습니다.
const allData = [...list_n1, ...list_b1, ...list_h1];

  const selectedItem = allData.find(item => item._id === parseInt(itemId, 10));

  if (!selectedItem) {
    return <div>해당 아이템을 찾을 수 없습니다.</div>;
  }

  return (
    <section className='Sub'>
      <div className='inner'>
        <img src={`../img/${selectedItem.img}`} alt={selectedItem.title} />
        <div className='Sub_content'>
          <h1>{selectedItem.title}</h1>
          <div className='Sub_item'>
            <p>브랜드</p><p>자체브랜드</p>
          </div>
          <div className='Sub_item'>
            <p>판매가</p><p>{selectedItem.price}</p>
          </div>
          <div className='Sub_item'>
            <p>배송비</p><p>3000원</p>
          </div>
          <div className='Sub_bottom'>
            <nav className='Sub_bottom_i'>
              <Link to =""><img src='../img/heart.png'/></Link>
              <Link to =""><img src='../img/cart.png'/></Link>
            </nav>
            <Link to ="">바로구매</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sub;