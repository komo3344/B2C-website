import React from 'react';
import './Header.css'

const Header = (props) => {
  return (
    <div>
      {props.type ? ('고객님 안녕하세요')
      : ('사장님 안녕하세요')
      }
      <div className='Nav'>
        <button>홈</button>
        <button>프로필</button>
        <button>로그아웃</button>
      </div>
      <hr />
    </div>
  );
};

export default Header;