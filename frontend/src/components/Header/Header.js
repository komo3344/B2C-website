import React from 'react';

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
        <button onClick={() => props.display_form('home')}>홈</button>
        <button onClick={() => props.display_form('profile')}>프로필</button>
        <button onClick={() => props.display_form('logout')}>로그아웃</button>
      </div>
    </div>
  );
};

export default Header;