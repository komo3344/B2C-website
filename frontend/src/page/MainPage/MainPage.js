import React, { Component } from 'react';
import { Header } from '../../components'
import { Redirect } from 'react-router-dom'
import './MainPage.css'
import { BodyContainer, BodyContainer2 } from '../../containers';

class MainPage extends Component {
  state = {
    type: localStorage.getItem('type'), // type 은 AuthPage에서 저장
    displayed_form: 'home',
    username: localStorage.getItem('username'),
  }

  display_form = (form, id) => { //화면 출력 폼 변경 함수
    this.setState({
      displayed_form: form,
      store_id: id
    });
  };

  componentDidMount() {
    // console.log('인증')
    // fetch(`http://127.0.0.1:8000/user/${localStorage.getItem('user_id')}`, {
    //   headers: {
    //     Authorization: `JWT ${localStorage.getItem('token')}`
    //   }
    // })
    //   .then(res => {
    //     console.log(res)
    //   }).catch(e => 
    //     console.log(e)
    //   );
  }

  render() {
    if (this.state.type === 'B') {
      return (
        <div className='frame'>
          <div className='header'>
            <Header username={this.state.username} type={this.state.type} display_form={this.display_form} />
          </div>
          <div className='container'>
            <BodyContainer type={this.state.type} store_id={this.state.store_id} displayed_form={this.state.displayed_form} display_form={this.display_form} />
          </div>
        </div>
      )
    }
    else if (this.state.type === 'C') {
      return (
        <div className='frame'>
          <div className='header'>
            <Header username={this.state.username} type={this.state.type} display_form={this.display_form} />
          </div>
          <div className='container'>
            <BodyContainer2 type={this.state.type} store_id={this.state.store_id} displayed_form={this.state.displayed_form} display_form={this.display_form} />
          </div>
        </div>
      )
    }
    else {
      return (
        <Redirect to='/' />
      )
    }
  }
};

export default MainPage;