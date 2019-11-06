import React, { Component } from "react";
import Body from '../Body/Body'
import ProfileContainer from '../ProfileContainer/ProfileContainer'
import AddStore from '../AddStore/AddStore'
import { Redirect } from 'react-router-dom'
import DetailStore from "../DetailStore/DetailStore";
import axios from 'axios'
import FormData from 'form-data'

class BodyContainer extends Component {


  handle_addstore = (e, data, files) => {
    e.preventDefault()

    var formData = new FormData();
    formData.append('u_id', localStorage.getItem('user_id'))
    formData.append('store_name', data.storeName)
    formData.append('business_number', data.businessNumber)
    formData.append('title', data.title)
    formData.append('content', data.storeIntroduce)
    axios.post('http://127.0.0.1:8000/store/', formData, {
      headers: {
        Authorization: `jwt ${localStorage.getItem('token')}`
      }
    }).then(res => {
      var formImgData = new FormData();
      formImgData.append('s_id', res.data.id)
      for (let i = 0; i < files.length; i++) {
        formImgData.append('image', files[i])
      }
      axios.post(`http://127.0.0.1:8000/store-file/`, formImgData, {
        headers: {
          Authorization: `jwt ${localStorage.getItem('token')}`
        }
      })
        .then(res => {
          console.log(res)
        })
        .catch(e => console.log(e))

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