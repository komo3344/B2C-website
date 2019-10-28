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
    if (this.props.type === 'C') {
      return (
        <div className='box'>
          <div className='store'>
          <StoreList type={this.props.type} data={this.state.store} display_form={this.props.display_form}/>
          </div>
          <div className='info'>
            <p>추천 맛집</p>
            <p>이벤트</p>
          </div>
        </div>
      );
    } else if (this.props.type === 'B') {
      return (
        <div className='box'>
          <div className='store'>
          <StoreList type={this.props.type} data={this.state.store} display_form={this.props.display_form}/>
          </div>
          <div className='info'>
            <button onClick={() => this.props.display_form('addstore')}>가게 등록하기</button>
          </div>
        </div>
      );
    } else {
      return (
        <div>잘못된 유저 type 입니다</div>
      )
    }
  }
};

export default Body;