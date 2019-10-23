import React from 'react';
import './Home.css'
import Body from '../Body/Body'
import Header from '../Header/Header'

const Home = (type) => {
  console.log('home page')
  console.log(type)
  return (
    <div>
      <div className='Header'>
        <Header type={type}/>
      </div>
      <div className='Body'>
        <Body />
      </div>
    </div>
  );
};

export default Home;