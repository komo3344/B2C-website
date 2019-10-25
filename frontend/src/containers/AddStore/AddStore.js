import React, { Component } from "react";

class AddStore extends Component {
  render() {
    return (
      <div>
        가게 추가
        <button onClick={() => this.props.display_form('home')}>등록하기</button>
      </div>
    )
  }
};

export default AddStore;