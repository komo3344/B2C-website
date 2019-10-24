import React, { Component } from 'react'
import './Login.css'
import Auth from '../Auth/Auth'


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      login: false,
      type : null
    }
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleSubmit = (event) => {
    this.setState({
      login: true
    })
  }

  action = () => {
  }

  action2 = () => {
  }


  action3 = () => {
  }

  render() {
    let type = localStorage.getItem('type')
    console.log(type)
    return (
      <div>
        {this.state.login 
        ? (
        <div>
          <Auth handle_login_check={this.props.handle_login_check}/>
        </div>
        )
        : (
        <div className='Login'>
          <h1>로그인</h1>
          <form onSubmit={this.handleSubmit} >
            <label>
              아이디:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <br />
            <label>
              비밀번호 : 
            <input type="password" value={this.state.value} onChange={this.handleChange} />
            </label>
            <br />
            <input type="submit" value="로그인" />
          </form>
          <button onClick={this.action}>고객</button>
          <button onClick={this.action2}>사장</button>
          <button onClick={this.props.handle_login_check}>test</button>
        </div>
        )
        }
      </div>
    );
  }
}

export default Login;