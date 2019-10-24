import React, { Component } from 'react'
import './Signup.css'
import Login from '../Login/Login'

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      signup_check: true
    };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleSubmit = (event) => {
    this.setState({
      signup_check: false
    })
  }

  render() {
    return (
      <div>
        {this.state.signup_check
          ? (
            <div className='Signup'>
              <h1>회원가입</h1>
              <form onSubmit={this.handleSubmit}>
                <label>Name:</label>
                <input type="text" name='id' onChange={this.handleChange} />
                <br />
                <label>Email:</label>
                <input type="email" name='email' onChange={this.handleChange} />
                <br />
                <label>PassWord:</label>
                <input type="password" name='password' onChange={this.handleChange} />
                <br />
                <label>PassWord Again:</label>
                <input type="password" name='password_check' onChange={this.handleChange} />
                <br />
                <input type="submit" value="Submit" />
              </form>
            </div>
          )
          : (
            <div>
              <Login />
            </div>
          )
        }
      </div>
    );
  }
}

export default Signup;