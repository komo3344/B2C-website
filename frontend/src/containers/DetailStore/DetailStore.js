import React, { Component } from 'react';

class DetailStore extends Component {
  render() {
    return (
      <div>
        {this.props.store_id}
        가게 디테일
      </div>
    );
  }
};

export default DetailStore;