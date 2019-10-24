import React from 'react';
import './Home.css'
import Body from '../../containers/Body/Body'
import Header from '../Header/Header'

const Home = (props) => {
  console.log('home page')
  console.log(props.type)
  return (
    <div>
      <div className='Header'>
        <Header type={props.type}/>
      </div>
      <div className='Body'>
        <Body />
      </div>
    </div>
  );
};

export default Home;