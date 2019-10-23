import React, { Component } from 'react'
import Home from '../../components/Home/Home'

class Auth extends Component {

  constructor(props) {
    super(props);
    // initializes component state
    this.state = {
      login : props.login,
      check : false,
      type : props.type
    };
  }
  render() {
    console.log('인증 페이지')
    console.log(this.state.type)
    return (
      <div>
        <Home type={this.state.type}/>
      </div>
    );
  }
}

export default Auth;