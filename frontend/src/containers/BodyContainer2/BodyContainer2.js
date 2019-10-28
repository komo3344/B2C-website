import React, { Component } from "react";
import Body from '../Body/Body'
import ProfileContainer from '../ProfileContainer/ProfileContainer'
import {Redirect} from 'react-router-dom'
import DetailStore from "../DetailStore/DetailStore";

class BodyContainer2 extends Component {
  render() { 
    if (this.props.displayed_form === 'home') {
      return (
        <div >
          <div className='nav'>
            가게 list <br />
            즐겨찾기 list <br />
            별점 5점 가게 list <br />
          </div>
          <div className='content'>
            <Body type={this.props.type} display_form={this.props.display_form}/>
          </div>
        </div>
      )
    }
    else if (this.props.displayed_form === 'profile') {
      return (
        <ProfileContainer display_form={this.props.display_form}/>
      )
    }
    else if (this.props.displayed_form === 'logout') {
      return(
        <Redirect to='/auth'/>
      )
    }
    else if (this.props.displayed_form === 'store') {
      return(
        <DetailStore store_id={this.props.store_id}/>
      )
    }
    else {
      return(
        <h1>요청하신 페이지가 없습니다</h1>
      )
    }
  }
};

export default BodyContainer2;