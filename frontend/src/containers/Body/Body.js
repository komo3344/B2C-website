import React, { Component } from 'react';
import { StoreList } from '../../components'
import './Body.css'
import axios from "axios";

class Body extends Component {
  state = {
    store : [] //모든 가게 list 를 가져와야함 const storelist = 'http://127.0.0.1:8000/store/';
  }

  componentDidMount () {
    axios.get("http://127.0.0.1:8000/store")
    .then(res =>{
      console.log(res.data)
      this.setState({
        store : res.data
      })
      console.log(this.state)
    }
    )
  }

  // "url": "http://127.0.0.1:8000/store/1",
  //       "id": 1,
  //       "u_id": 1,
  //       "store_name": "aaaaa",
  //       "business_number": 2314213,
  //       "title": "asda",
  //       "content": "asdasd",
  //       "image": null,
  //       "current_user": null

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