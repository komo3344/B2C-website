import React, { Component } from "react";

class AddStore extends Component {
  state = {
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleSubmit = (event) => {
    this.setState({
      login: true
    })
  }

  render() {
    return (
      <div>
        가게 추가
        <form onSubmit={this.handleSubmit} >
          <label>
            가게 이름 :
          <input type="text" onChange={this.handleChange} name='storeName'/>
          </label>
          <br />
          <label>
            사업자 등록 번호 :
          <input type="number" onChange={this.handleChange} name='businessNumber'/>
          </label>
          <br />
          <label>
            가게 소개 :
            <textarea rows="5" cols="40" name='storeIntroduce' />
          </label>
          <br />

          <label>
            가게 이미지 : 
            <input type="file" multiple/>
          </label>
          <br />
        </form>

        <button onClick={() => this.props.display_form('home')}>등록하기</button>
      </div>
    )
  }
};

export default AddStore;