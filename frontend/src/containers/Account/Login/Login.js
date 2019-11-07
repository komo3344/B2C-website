/*global FB*/
import React, { Component } from 'react'
import './Login.css'
import {FacebookLoginButton, GoogleLoginButton} from "react-social-login-buttons"

class Login extends Component {
  state = {
  }

  componentDidMount() {
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));


    window.fbAsyncInit = () => {
      FB.init({
        appId: '2430121853753479', //Change with your Facebook app id
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v3.0'
      });

      FB.Event.subscribe('auth.statusChange', response => {
        if (response.authResponse) {
          this.checkLoginState();
        } else {
          console.log('[FacebookLoginButton] User cancelled login or did not fully authorize.');
        }
      });
    };
  }

  checkLoginState() {
    FB.getLoginStatus(function(response) {
      this.statusChangeCallback(response);
    }.bind(this));
  }

  login() {
    FB.login(this.checkLoginState(), {
      scope: 'email'
    });
  }

  statusChangeCallback(response) {
    if (response.status === 'connected') {
      this.testAPI();
    } else if (response.status === 'not_authorized') {
      console.log("[FacebookLoginButton] Person is logged into Facebook but not your app");
    } else {
      console.log("[FacebookLoginButton] Person is not logged into Facebook");
    }
  }

  testAPI() {
    FB.api('/me', function(response) {
      console.log('[FacebookLoginButton] Successful login for: ', response);
    });
  }

  handle_change = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
  };
  

  
  render() {
    return (
      <div className='Login'>
        <h1>로그인</h1>
        <form onSubmit={(e) => { this.props.handle_login(e, this.state) }} >
          <label>
            아이디:
          <input type="text" name='id' value={this.state.id} onChange={this.handle_change} />
          </label>
          <br />
          <label>
            비밀번호 :
            <input type="password" name='password' value={this.state.password} onChange={this.handle_change} />
          </label>
          <br />
          <button type="submit">로그인 </button>
        </form>
        <button onClick={() => { this.props.display_form('signup') }}> 회원가입 </button><br />
        <div className='SocialLogin'>
          <FacebookLoginButton onClick={()=> this.login()}/>
          <GoogleLoginButton onClick={()=> alert("Google social login")}/>
        </div>
      </div>
    );
  }
}

export default Login;