import React, { Component } from "react";
import Body from '../Body/Body'
import ProfileContainer from '../ProfileContainer/ProfileContainer'
import AddStore from '../AddStore/AddStore'
import {Redirect} from 'react-router-dom'

class BodyContainer extends Component {
  render() { 
    if (this.props.displayed_form === 'home') {
      return (
        <div >
          <div className='nav'>
            가게 list <br />
          </div>
          <div className='content'>
            <Body display_form={this.props.display_form}/>
          </div>
        </div>
      )
    }
    else if (this.props.displayed_form === 'profile') {
      return (
        <ProfileContainer />
      )
    }
    else if (this.props.displayed_form === 'logout') {
      return(
        <Redirect to='/auth'/>
      )
    }
    else if (this.props.displayed_form === 'addstore') {
      return(
        <AddStore display_form={this.props.display_form}/>
      )
    }
    else {
      return(
        <h1>요청하신 페이지가 없습니다</h1>
      )
    }
  }
};

export default BodyContainer;