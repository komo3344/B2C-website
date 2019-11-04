import React, { Component } from "react";
import Body from '../Body/Body'
import ProfileContainer from '../ProfileContainer/ProfileContainer'
import AddStore from '../AddStore/AddStore'
import { Redirect } from 'react-router-dom'
import DetailStore from "../DetailStore/DetailStore";
import axios from 'axios'

class BodyContainer extends Component {


  handle_addstore = (e, data) => {
    e.preventDefault()
    axios.post('http://127.0.0.1:8000/store/', {
      u_id: localStorage.getItem('user_id'),
      store_name: data.storeName,
      business_number: data.businessNumber,
      title: data.title,
      content: data.storeIntroduce,
    }, {
      headers: {
        Authorization: `jwt ${localStorage.getItem('token')}`
      }
    }).then(res => {
      this.props.display_form('home')
    }).catch(e => {
      console.log(e)
    })
  }

  handle_deletestore = (e, store_id) => {
    axios.delete(`http://127.0.0.1:8000/store/${store_id}`, {
      headers: {
        Authorization: `jwt ${localStorage.getItem('token')}`
      }
    })
    .then(res => {
      this.props.display_form('profile')
    })
    .catch(e => {
      alert('자신의 가게만 삭제 가능합니다')
    })
  }

  render() {
    if (this.props.displayed_form === 'home') {
      return (
        <div >
          <div className='nav'>
            가게 list <br />
          </div>
          <div className='content'>
            <Body type={this.props.type} display_form={this.props.display_form} />
          </div>
        </div>
      )
    }
    else if (this.props.displayed_form === 'profile') {
      return (
        <ProfileContainer display_form={this.props.display_form} />
      )
    }
    else if (this.props.displayed_form === 'logout') {
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      localStorage.removeItem('user_id');
      return (
        <Redirect to='/auth' />
      )
    }
    else if (this.props.displayed_form === 'addstore') {
      return (
        <AddStore display_form={this.props.display_form} handle_addstore={this.handle_addstore} />
      )
    }
    else if (this.props.displayed_form === 'store') {
      return (
        <DetailStore type={this.props.type} store_id={this.props.store_id} handle_deletestore={this.handle_deletestore} />
      )
    }
    else {
      return (
        <h1>요청하신 페이지가 없습니다</h1>
      )
    }
  }
};

export default BodyContainer;