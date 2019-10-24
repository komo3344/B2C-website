import React from "react";
import { Link } from 'react-router-dom'
import './StartPage.css'

const StartPage = () => {
  return (
    <div className='start'>Start <br />
    <Link to='/auth' >시작하기</Link>
    </div>
  )
};

export default StartPage;