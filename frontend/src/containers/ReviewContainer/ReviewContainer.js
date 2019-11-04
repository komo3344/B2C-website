import React, { Component } from 'react';
import { Review } from '../../components'
// import logo from '../../image/certifying_shot.jpg'
import Axios from 'axios';
import $ from "jquery";
// window.$ = window.jQuery = jQuery;


class ReviewContainer extends Component {
  state = { // this.props.store_id 를 가지고 해당 게시물의 리뷰 데이터 (Review, Review_file, Review_comment 데이터를 전부 불러옴)
    Review: [], //리뷰 하드코딩
    re: [],
    re_re: []
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

  handle_C_review_create = (e, comment, star_score) => {
    e.preventDefault()
    Axios.post('http://127.0.0.1:8000/review/', {
      comment: comment,
      star_score: star_score,
      s_id: this.props.store_id,
      u_id: localStorage.getItem('user_id')
    },{
      headers:{
        Authorization : `jwt ${localStorage.getItem('token')}`
      }
    }).then(res => {
      this.get_review()
      $("#commentCreate")[0].reset(); //댓글 작성시 form에 있는 데이터 비우는 제이쿼리

    }).catch(e => { console.log(e) })
  }

  get_review = () => {
    Axios.get(`http://127.0.0.1:8000/review/store/${this.props.store_id}`,{
      headers:{
        Authorization : `jwt ${localStorage.getItem('token')}`
      }
    })
      .then(
        res => {
          this.setState({
            Review: res.data,
            re: res.data
          })
        }
      )
    Axios.get(`http://127.0.0.1:8000/review-comment`,{
      headers:{
        Authorization : `jwt ${localStorage.getItem('token')}`
      }
    })
      .then(
        res => {
          this.setState({
            re_re: res.data
          })
        }
      )
  }



  componentDidMount() {
    Axios.get(`http://127.0.0.1:8000/review/store/${this.props.store_id}`,{
      headers:{
        Authorization : `jwt ${localStorage.getItem('token')}`
      }
    })
      .then(
        res => {
          this.setState({
            Review: res.data,
            re: res.data
          })
        }
      )
    Axios.get(`http://127.0.0.1:8000/review-comment`,{
      headers:{
        Authorization : `jwt ${localStorage.getItem('token')}`
      }
    })
      .then(
        res => {
          this.setState({
            re_re: res.data
          })
        }
      )
  }

  doDisplay = () => {
    var con = document.getElementById("myDIV")
    var con2 = document.getElementById("comment_button")
    if (con.style.display === 'none') {
      con.style.display = 'block'
    } else {
      con.style.display = 'none'
    }
    if (con2.style.display === 'block') {
      con2.style.display = 'none'
    } else {
      con2.style.display = 'block'
    }
  }

  doEdit_C = (id) => {
    var C_comment = document.getElementById(`C_comment_${id}`)
    var C_comment_edit = document.getElementById(`C_comment_edit_${id}`)
    var C_comment_buttons = document.getElementById(`C_comment_buttons_${id}`)

    if (C_comment_edit.style.display === 'none') {
      C_comment_edit.style.display = 'block'
    } else {
      C_comment_edit.style.display = 'none'
    }

    if (C_comment.style.display === 'block') {
      C_comment.style.display = 'none'
    } else {
      C_comment.style.display = 'block'
    }

    if (C_comment_buttons.style.display === 'block') {
      C_comment_buttons.style.display = 'none'
    } else {
      C_comment_buttons.style.display = 'block'
    }
  }

  doCreate_B = (id) => {
    var B_comment_create = document.getElementById(`B_comment_create_${id}`)
    var B_comment_create_buttons = document.getElementById(`B_comment_create_buttons_${id}`)

    if (B_comment_create.style.display === 'none') {
      B_comment_create.style.display = 'block'
    } else {
      B_comment_create.style.display = 'none'
    }

    if (B_comment_create_buttons.style.display === 'block') {
      B_comment_create_buttons.style.display = 'none'
    } else {
      B_comment_create_buttons.style.display = 'block'
    }
  }

  doEdit_B = (id) => {
    var B_comment = document.getElementById(`B_comment_${id}`)
    var B_comment_edit = document.getElementById(`B_comment_edit_${id}`)
    var B_comment_buttons = document.getElementById(`B_comment_buttons_${id}`)

    if (B_comment_edit.style.display === 'none') {
      B_comment_edit.style.display = 'block'
    } else {
      B_comment_edit.style.display = 'none'
    }

    if (B_comment.style.display === 'block') {
      B_comment.style.display = 'none'
    } else {
      B_comment.style.display = 'block'
    }

    if (B_comment_buttons.style.display === 'block') {
      B_comment_buttons.style.display = 'none'
    } else {
      B_comment_buttons.style.display = 'block'
    }
  }

  deleteComment = (e, id) => {
    Axios.delete(`http://127.0.0.1:8000/review/${id}`,{
      headers:{
        Authorization : `jwt ${localStorage.getItem('token')}`
      }
    })
      .catch(e => console.log(e))
      .then(
        this.get_review()
      )
  }

  deleteReComment = (e, id) => {
    Axios.delete(`http://127.0.0.1:8000/review-comment/${id}`,{
      headers:{
        Authorization : `jwt ${localStorage.getItem('token')}`
      }
    })
      .catch(e => console.log(e))
      .then(
        this.get_review()
      )
  }

  handle_B_comment_create = (e, data, r_id, r_r_id) => {
    e.preventDefault()
    Axios.post('http://127.0.0.1:8000/review-comment/', {
      s_id: this.props.store_id,
      r_id: r_id,
      u_id: localStorage.getItem('user_id'),
      comment: data
    },{
      headers:{
        Authorization : `jwt ${localStorage.getItem('token')}`
      }
    }).then(res => {
      console.log(res)
      this.get_review()
    }
    ).catch(
      e => console.log(e)
    )
  }

  handle_C_comment_edit = (e, id, comment, star_score) => {
    e.preventDefault()
    Axios.put(`http://127.0.0.1:8000/review/${id}`,{
      comment: comment,
      star_score : star_score
    },{
      headers:{
        Authorization : `jwt ${localStorage.getItem('token')}`
      }
    }).then(res => {
      this.get_review()    
    })
    .catch(e => console.log(e))
  }

  handle_B_comment_edit = (e, id, comment) => {
    e.preventDefault()
    Axios.put(`http://127.0.0.1:8000/review-comment/${id}`,{
      comment: comment,
    },{
      headers:{
        Authorization : `jwt ${localStorage.getItem('token')}`
      }
    }).then(res => {
      this.get_review()      
    })
    .catch(e => console.log(e))
  }
  

  render() {
    return (
      <div>
        <h3>리뷰우</h3>
        {this.props.type === 'C' &&
          <form id='commentCreate' onSubmit={(e) => { this.handle_C_review_create(e, this.state.comment, this.state.star_score) }}>
            <input type='number' onChange={this.handle_change} name='star_score' min="1" max="5" placeholder='별점'></input>
            <textarea rows='8' onChange={this.handle_change} cols='60' placeholder='댓글 내용을 작성해주세요!' name='comment' required></textarea>
            <input type='file'></input>
            <button type='submit'>작성하기</button>
          </form>
        }
        <Review
          data={this.state.Review}
          type={this.props.type}
          doCreate_B={this.doCreate_B}
          doEdit_C={this.doEdit_C}
          doEdit_B={this.doEdit_B}
          handle_B_comment_create={this.handle_B_comment_create}
          handle_B_comment_edit={this.handle_B_comment_edit}
          handle_C_comment_edit={this.handle_C_comment_edit}
          deleteComment={this.deleteComment}
          deleteReComment={this.deleteReComment}
          re={this.state.re}
          re_re={this.state.re_re}
        />
      </div>
    );
  }
};

export default ReviewContainer;