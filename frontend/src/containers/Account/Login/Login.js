import React, { Component } from 'react'
import './Login.css'
import axios from "axios";
import KakaoLogin from 'react-kakao-login'
import NaverLogin from 'react-naver-login';
import FacebookLogin from 'react-facebook-login';

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

  handle_KakaoLogin = () => {
    var host = 'https://kauth.kakao.com'
    var client_id = '63e4734e72d2d421ef9d5ff9200a241f'
    var redirect_uri = 'http://127.0.0.1:8000/oauth/'
    var url = `${host}/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code`
    axios.get(url).then(res => {
      window.open(res.config.url)
    })
  }

  responseNaver = (res) => {
    console.log(res)
    var data = {}
    var id_name = res.email
    var rex_id_name = id_name.split('@')
    data['id'] = `${rex_id_name[0]}@${res.id}`
    data['password'] = 'asdqwe123!'
    data['password_check'] = 'asdqwe123!'
    data['email'] = res.email
    data['type'] = false
    data['user_type'] = 'naver'

    var user_list
    axios.get('http://127.0.0.1:8000/user/')
      .then(res => {
        user_list = res.data
        var login_data = {}
        login_data['id'] = data.id
        login_data['password'] = data.password
        var check = false
        for (let i = 0; i < user_list.length; i++) {
          if (data.id === user_list[i].username) {
            check = true
          }
        }
        if (check) {
          this.props.handle_login(false, login_data)
        } else {
          this.props.handle_signup(false, data)
        }
      })
      .catch(e => console.log(e))
  }

  responseKakao = (res) => {
    var data = {}
    data['id'] = `${res.profile.properties.nickname}@${res.profile.id}`
    data['password'] = 'asdqwe123!'
    data['password_check'] = 'asdqwe123!'
    data['email'] = res.profile.kakao_account.email
    data['type'] = false
    data['user_type'] = 'kakao'

    // data.id
    var user_list
    axios.get('http://127.0.0.1:8000/user/')
      .then(res => {
        user_list = res.data
        var login_data = {}
        login_data['id'] = data.id
        login_data['password'] = data.password
        var check = false
        for (let i = 0; i < user_list.length; i++) {
          if (data.id === user_list[i].username) {
            check = true
          }
        }
        if (check) {
          this.props.handle_login(false, login_data)
        } else {
          this.props.handle_signup(false, data)
        }
      })
      .catch(e => console.log(e))
  }

  responseFacebook = (res) => {
    console.log(res)
    var data = {}
    data['id'] = `${res.name}@${res.id}`
    data['password'] = 'asdqwe123!'
    data['password_check'] = 'asdqwe123!'
    data['email'] = res.email
    data['type'] = false
    data['user_type'] = 'facebook'
    console.log('페이스북 res 데이터', data)
    var user_list=[]
    axios.get('http://127.0.0.1:8000/user/')
      .then(res => {
        user_list = res.data
        var login_data = {}
        login_data['id'] = data.id
        login_data['password'] = data.password
        console.log('페이스북 로그인 데이터', login_data)
        var check = false
        for (let i = 0; i < user_list.length; i++) {
          if (data.id === user_list[i].username) {
            console.log(user_list[i].username)
            check = true
          }
        }
        if (check) {
          console.log('if ', check)
          this.props.handle_login(false, login_data)
          
        } else {
          console.log('else', check)
          this.props.handle_signup(false, data)
        }
      })
      .catch(e => console.log(e))
  }
  responseFail = e => {
    console.log(e)
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
          <div id="naver_id_login"></div>

          <KakaoLogin
          //beb75fde754395b36f4da5bafb79237a
          //08cb3651eda5236b400da6a4bb2d1e9f
            jsKey='beb75fde754395b36f4da5bafb79237a'
            onSuccess={this.responseKakao}
            onFailure={this.responseFail}
            getProfile="true"
          /><br />
          <FacebookLogin
            appId="2430121853753479"
            autoLoad={false}
            fields="name,email"
            callback={this.responseFacebook}
          />          
          <NaverLogin
            clientId="zd77osJ0K94OH8504tNu"
            callbackUrl="http://127.0.0.1:3000/auth"
            render={(props) => <div onClick={props.onClick}>Naver Login</div>}
            onSuccess={(naverUser) => {this.responseNaver(naverUser)}}
            onFailure={(e) => console.error(e)}
          />
        </div>
      </div>
    );
  }
}

export default Login;