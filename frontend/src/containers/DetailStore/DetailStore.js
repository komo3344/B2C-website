import React, { Component } from 'react';
import logo from '../../image/ckicken.jpg'
import ReviewContainer from '../ReviewContainer/ReviewContainer'
import './DetailStore.css'

class DetailStore extends Component {
  state = { //받아온 store_id 로 가게 data 전달받아서 출력 후에 유저 id도 받아서 ReviewContainer로 전달해야함
    store: {
      store_name: '치킨 치이킨',
      business_number: 1126254879534,
      title: '시켜먹으면 후회안하는',
      content: '후라이드 만오천원 양념 만칠천원',
      img: '/ckicken.jpg',
    }
  }

  handleSubmit = (e) => {
  }

  render() {
    if (this.props.type === 'C') {
      return (
        <div className='DetailStore'>
          가게 번호{this.props.store_id}
          <br />
          유저 타입{this.props.type}
          <br />
          <img src={logo} alt='가게 사진' />
          <p>가게 이름 : {this.state.store.store_name}</p>
          <p>가게 게시물 제목 : {this.state.store.title}</p>
          <p>가게 내용 : {this.state.store.content}</p>
          <form onSubmit={this.handleSubmit}>
          <input type='number' name='star_score' min="1" max="5" placeholder='별점'></input>
            <textarea rows='8' cols='60' placeholder='댓글 내용을 작성해주세요!'></textarea>
            <input type='file'></input>
            <button type='submit'>작성하기</button>
          </form>
          <ReviewContainer type={this.props.type} store_id={this.props.store_id} /> {/*추후에 user_id 값도 넘긴다*/}
        </div>
      );
    } else if (this.props.type === 'B') {
      return (
        <div className='DetailStore'>
          가게 번호{this.props.store_id}
          <br />
          유저 타입{this.props.type}
          <br />
          <img src={logo} alt='가게 사진' />
          <p>가게 이름 : {this.state.store.store_name}</p>
          <p>사업자 번호 : {this.state.store.business_number}</p>
          <p>가게 게시물 제목 : {this.state.store.title}</p>
          <p>가게 내용 : {this.state.store.content}</p>
          <button>가게 정보 수정</button>
          <button>가게 삭제</button>
          <ReviewContainer type={this.props.type} store_id={this.props.store_id} /> {/*추후에 user_id 값도 넘긴다*/}
        </div>
      );
    } else {
      return <div>잘못된 유저 TYPE 입니다</div>
    }
  }
};

export default DetailStore;