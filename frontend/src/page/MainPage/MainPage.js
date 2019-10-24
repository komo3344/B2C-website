import React, { Component } from 'react';
import { Header, Body } from '../../components'
import './MainPage.css'

class MainPage extends Component {
  state = {
    type: localStorage.getItem('type')
  }


  render() {
    return (
      <div className='frame'>
        <div className='header'>
          <Header type={this.state.type} />
        </div>
        <div className='container'>
          <div className='nav'>
            가게 list <br />
            즐겨찾기
          </div>
          <div className='content'>
            <Body />
          </div>
        </div>
      </div>
    )
  }
};

export default MainPage;