import React, { Component } from 'react';
import { StoreList } from '../../components'
import './Body.css'

class Body extends Component {
  state = {
    store : [
      {
        name: '갈비탕',
        content: '9시 부터 영업'
      },
      {
        name: '피자',
        content: '백종원 피자 맛집'
      }

    ]
  }
  render() {
    return (
      <div className='div'>
        <div className='store'>
        <StoreList data={this.state.store}/>
        </div>
        <div className='info'>
          <p>미구현</p>
          <button>가게 등록하기</button>
        </div>
      </div>
    );
  }
};

export default Body;