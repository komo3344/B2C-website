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
    console.log(this.state)
  }

  action = () => {
    this.setState({
      type : false
    })
    console.log(this.state)
  }

  action2 = () => {
    this.setState({
      type : true
    })
    console.log(this.state)
  }

  render() {

    return (
      <div>
        {this.state.login 
        ? (
        <div>
          <Auth login='asd' check_type={this.state.type} type={this.state.type}/>
        </div>
        )
        : (
        <div className='Login'>
          <form onSubmit={this.handleSubmit} >
            <label>
              Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
          <button onClick={this.action}>고객</button>
          <button onClick={this.action2}>사장</button>
        </div>
        )
        }
      </div>
    );
  }
}

export default Login;