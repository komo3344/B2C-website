import React, { Component } from 'react';
import logo from '../../image/ckicken.jpg'

class DetailStore extends Component {
  state = { //받아온 store_id 로 가게 data 전달받아서 출력
    store : {
      store_name : '치킨 치이킨',
      business_number : 1126254879534,
      title : '시켜먹으면 후회안하는',
      content : '후라이드 만오천원 양념 만칠천원',
      img : '/ckicken.jpg'
    }
  }


  render() {
    return (
      <div>
        가게 번호{this.props.store_id}
        <br />
        <img src={logo} alt='가게 사진' />
        <p>가게 이름 : {this.state.store.store_name}</p>
        <p>사업자 번호 : {this.state.store.business_number}</p>
        <p>가게 게시물 제목 : {this.state.store.title}</p>
        <p>가게 내용 : {this.state.store.content}</p>
      </div>
    );
  }
};

export default DetailStore;