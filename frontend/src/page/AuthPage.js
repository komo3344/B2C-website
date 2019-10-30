import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { Login, Signup } from '../containers'
import axios from "axios";

class AuthPage extends Component {
  state = {
    login_check: false,
    type: 'C',
    displayed_form: 'login'
  }

  handle_login_check = () => {
    this.setState({
      login_check: true
    })
    localStorage.setItem('type', this.state.type) // MainPage에서 type 이용
  }

  handle_login = (e, data) => {
    e.preventDefault()
    axios.post('http://127.0.0.1:8000/rest-auth/login/',{
      username: data.id,
      password: data.password
    })
    .then(res => {
      localStorage.setItem('token', res.data.token)
      if(res.data.user.role_profile === 1){
        localStorage.setItem('type', 'B')
      } else if (res.data.user.role_profile === 2){
        localStorage.setItem('type', 'C')
      }
      else localStorage.setItem('type', 'A')
      console.log(res.data.user.username)
      localStorage.setItem('username', res.data.user.username);
      localStorage.setItem('user_id', res.data.user.id);
      this.handle_login_check()
    }
    )
  }

  handle_signup = (e, data) => {
    var type
    if(data.type === 'true'){
      type = true
    } else type = false
    e.preventDefault()
    axios.post('http://127.0.0.1:8000/rest-auth/registration/signup/',{
      username: data.id,
      password1: data.password,
      password2: data.password_check,
      email: data.email,
      Business: type
    })
    .then(res => {
      this.display_form('login')
    })
  }


  display_form = (form) => {
    this.setState({
      displayed_form: form
    });
  };

  render() {
    let form;
    switch (this.state.displayed_form) {
      case 'login':
        form = <Login display_form={this.display_form} handle_login={this.handle_login} />;
        break;
      case 'signup':
        form = <Signup handle_signup={this.handle_signup} />;
        break;
      default:
        form = '';
    }
    return (
      <div>
        {this.state.login_check ?
          (
            <Redirect to="/main" test={'asd'} />
          ) :
          (
            <div>
              {form}
            </div>
          )
        }
      </div>
    )
  }
};

export default AuthPage;