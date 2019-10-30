import React, { Component } from 'react';
import logo from '../../image/ckicken.jpg'
import ReviewContainer from '../ReviewContainer/ReviewContainer'
import './DetailStore.css'
import axios from 'axios'

class DetailStore extends Component {
  state = {
    store: []//받아온 store_id 로 가게 data 전달받아서 출력 후에 유저 id도 받아서 ReviewContainer로 전달해야함
  }
  componentDidMount() {
    axios.get(`http://127.0.0.1:8000/store/${this.props.store_id}`)
      .then(res => {
        console.log(this.state)
        this.setState({
          store: res.data,
        })
        console.log(this.state)
        console.log(this.state.store.store_name)
      }).catch(e => {
        console.log(e)
      })
  }

  handleSubmit = (e) => {
  }

  storeEdit = () => {
    var store_info = document.getElementById("store_info")
    var edit_store_info = document.getElementById("edit_store_info")
    var edit_store_info_button = document.getElementById("edit_store_info_button")

    if (edit_store_info.style.display === 'none') {
      edit_store_info.style.display = 'block'
    } else {
      edit_store_info.style.display = 'none'
    }

    if (store_info.style.display === 'block') {
      store_info.style.display = 'none'
    } else {
      store_info.style.display = 'block'
    }

    if (edit_store_info_button.style.display === 'block') {
      edit_store_info_button.style.display = 'none'
    } else {
      edit_store_info_button.style.display = 'block'
    }
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
          <button>사진 바꾸기</button>
          <div id='store_info'>
            <p>가게 이름 : {this.state.store.store_name}</p>
            <p>사업자 번호 : {this.state.store.business_number}</p>
            <p>가게 게시물 제목 : {this.state.store.title}</p>
            <p>가게 내용 : {this.state.store.content}</p>
          </div>
          <div id='edit_store_info'>
            <form onSubmit={this.handleSubmit2}>
              가게 이름 : <input type='text' name='store_name' value={this.state.store.store_name}></input><br />
              사업자 번호 : <input type='number' name='business_number' value={this.state.store.business_number}></input><br />
              가게 게시물 제목 : <input type='text' name='title' value={this.state.store.title}></input><br />
              가게 내용 : <textarea name='content'>{this.state.store.content}</textarea><br />
              <button type='submit'>수정하기</button>
            </form>
          </div>
          <div id='edit_store_info_button'>
            <button onClick={this.storeEdit}>가게 정보 수정</button>
            <button>가게 삭제</button>
          </div>
          <ReviewContainer type={this.props.type} store_id={this.props.store_id} /> {/*추후에 user_id 값도 넘긴다*/}
        </div>
      );
    } else {
      return <div>잘못된 유저 TYPE 입니다</div>
    }
  }
};

export default DetailStore;