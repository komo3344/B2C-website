import React from 'react';
import { Link } from 'react-router-dom'

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to='/Login' className='button'>시작하기</Link>
      </header>
    </div>
  );
}

export default App;
