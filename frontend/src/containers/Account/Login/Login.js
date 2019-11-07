import React, { Component } from 'react'
import './Login.css'
import {FacebookLoginButton, GoogleLoginButton} from "react-social-login-buttons"
import axios from "axios";

class Login extends Component {
  state = {
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

  handle_KakaoLogin(){
    var host = 'https://kauth.kakao.com'
    var client_id = '63e4734e72d2d421ef9d5ff9200a241f'
    var redirect_uri = 'http://127.0.0.1:8000/oauth/'
    var url = `${host}/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code`
    console.log('url :',url)
    axios.get(url).
    then(res =>{
      console.log(res)
      window.open(res.url)
    })

  }

  
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
          <a id="kakao-login-btn"></a><br />
          <button ><img src="\images\kakao_account_login_btn_medium_narrow.png" onClick={this.handle_KakaoLogin.bind(this)} /></button>
          <FacebookLoginButton onClick={()=> this.handle_KakaoLogin}/>
          <GoogleLoginButton onClick={()=> alert("Google social login")}/>
        </div>
      </div>
    );
  }
}

export default Login;