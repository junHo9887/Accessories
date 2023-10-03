import React from 'react';
import { Link } from 'react-router-dom';
import list_n1 from '../Data/proDuctData_n';
import Sub from './Sub.js';

function Main() {
  return (
    <section className='Main'>
      <h1>NEW ITEM</h1>
      <div className='content'>
        {list_n1.map(item => (
            <Link to={`/item/${item._id}`} key={item._id}>
              <nav>
                <img src={`./img/${item.img}`} alt={item.title} />
                <Sub data={item} />
              </nav>
              <p>{item.title}</p>
              <p>{item.price}</p>
            </Link>
        ))}
      </div>
    </section>
  );
}

export default Main;