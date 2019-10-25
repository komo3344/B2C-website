import React, { Component } from 'react';
import { Header } from '../../components'
import { Redirect } from 'react-router-dom'
import './MainPage.css'
import { BodyContainer } from '../../containers';

class MainPage extends Component {
  state = {
    type: localStorage.getItem('type'), // type 은 AuthPage에서 저장
    displayed_form: 'home'
  }

  display_form = (form, id) => { //화면 출력 폼 변경 함수
    this.setState({
      displayed_form: form,
      store_id: id
    });
  };

  render() {
    if (this.state.type === 'B') {
      return (
        <div className='frame'>
          <div className='header'>
            <Header type={this.state.type} display_form={this.display_form}/>
          </div>
          <div className='container'>
            <BodyContainer store_id={this.state.store_id} displayed_form={this.state.displayed_form} display_form={this.display_form}/>
          </div>
        </div>
      )
    }
    else if (this.state.type === 'C') {
      return (
        <div className='frame'>
          <div className='header'>
            <Header type={this.state.type} display_form={this.display_form}/>
          </div>
          <div className='container'>
            <BodyContainer display_form={this.state.display_form}/>
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