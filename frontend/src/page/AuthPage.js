import React, { Component } from 'react';
import { Login } from '../containers'
import {Redirect} from 'react-router-dom'

class AuthPage extends Component {
  state = {
    login_check: false,
    type : 'B'
  }

  handle_login_check = () => {
    this.setState({
      login_check: true
    })
    localStorage.setItem('type',this.state.type) // MainPage에서 type 이용
  }

  handle_login = (e, data) => {
    
  }

  render() {
    return (
      <div>
        {this.state.login_check ?
          (
            <Redirect to="/main" test={'asd'}/>
          ) :
          (
            <Login handle_login_check={this.handle_login_check} />
          )
        }
      </div>
    )
  }
};

export default AuthPage;