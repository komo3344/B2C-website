import React, { Component } from 'react'

class Auth extends Component {
  render() {
    console.log('인증완료')
    return (
      <div>
        {this.props.handle_login_check()}
      </div>
    );
  }
}

export default Auth;