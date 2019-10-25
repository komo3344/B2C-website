import React, { Component } from 'react';
import { StoreList } from '../../components'
import './Body.css'

class Body extends Component {
  state = {
    store : [ //모든 가게 list 를 가져와야함
      {
        id: 1,
        name: '갈비탕',
        content: '9시 부터 영업'
      },
      {
        id: 2,
        name: '피자',
        content: '백종원 피자 맛집'
      }

    ]
  }
  render() {
    return (
      <div className='box'>
        <div className='store'>
        <StoreList data={this.state.store} display_form={this.props.display_form}/>
        </div>
        <div className='info'>
          <p>미구현</p>
          <button onClick={() => this.props.display_form('addstore')}>가게 등록하기</button>
        </div>
      </div>
    );
  }
};

export default Body;