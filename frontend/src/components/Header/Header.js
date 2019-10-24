import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom'

const Header = (props) => {
  let x = ''
  if (props.type === 'B') {
    x = '사장님 안녕하세요'
  }
  else x = '고객님 안녕하세요 '
  return (
    <div>
      {x}
      <div className='Nav'>  
        <button>홈</button>
        <button>프로필</button>
        <Link to='/auth'>로그아웃</Link>
      </div>
    </div>
  );
};

export default Header;