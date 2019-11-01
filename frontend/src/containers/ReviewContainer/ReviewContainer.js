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

  handle_review = (e, comment, star_score) => {
    e.preventDefault()
    Axios.post('http://127.0.0.1:8000/review/', {
      comment: comment,
      star_score: star_score,
      s_id: this.props.store_id,
      u_id: localStorage.getItem('user_id')
    }).then(res => {
      this.get_review()
      $("#commentCreate")[0].reset(); //댓글 작성시 form에 있는 데이터 비우는 제이쿼리
      
    }).catch(e => { console.log(e) })
  }

  get_review = () => {
    Axios.get(`http://127.0.0.1:8000/review/store/${this.props.store_id}`)
      .then(
        res => {
          this.setState({
            Review: res.data,
            re: res.data
          })
        }
      )
    Axios.get(`http://127.0.0.1:8000/review-comment`)
      .then(
        res => {
          this.setState({
            re_re: res.data
          })
        }
      )
  }



  componentDidMount() {
    Axios.get(`http://127.0.0.1:8000/review/store/${this.props.store_id}`)
      .then(
        res => {
          this.setState({
            Review: res.data,
            re: res.data
          })
        }
      )
    Axios.get(`http://127.0.0.1:8000/review-comment`)
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

  deleteComment = (e, id) => {
    Axios.delete(`http://127.0.0.1:8000/review/${id}`)
      .catch(e => console.log(e))
      .then(
        this.get_review()
      )
  }

  deleteReComment = (e, id) => {
    Axios.delete(`http://127.0.0.1:8000/review-comment/${id}`)
      .catch(e => console.log(e))
      .then(
        this.get_review()
      )
  }

  doEditComment = () => {
    var boss_comment = document.getElementById("boss_comment")
    var buttons = document.getElementById("buttons")
    var edit_comment = document.getElementById("edit_comment")

    if (edit_comment.style.display === 'none') {
      edit_comment.style.display = 'block'
    } else {
      edit_comment.style.display = 'none'
    }

    if (boss_comment.style.display === 'block') {
      boss_comment.style.display = 'none'
    } else {
      boss_comment.style.display = 'block'
    }

    if (buttons.style.display === 'block') {
      buttons.style.display = 'none'
    } else {
      buttons.style.display = 'block'
    }


  }

  HandleReviewComment = (e,data,r_id, r_r_id) => {
    e.preventDefault()
    Axios.post('http://127.0.0.1:8000/review-comment/', {
      s_id : this.props.store_id,
      r_id : r_id,
      u_id : localStorage.getItem('user_id'),
      comment : data
    }).then(res => {
      console.log(res)
      this.get_review()
      }
    ).catch(
      e => console.log(e)
    )
  }

  render() {
    return (
      <div>
        <h3>리뷰우</h3>
        {this.props.type === 'C' &&
          <form id='commentCreate' onSubmit={(e) => { this.handle_review(e, this.state.comment, this.state.star_score) }}>
            <input type='number' onChange={this.handle_change} name='star_score' min="1" max="5" placeholder='별점'></input>
            <textarea rows='8' onChange={this.handle_change} cols='60' placeholder='댓글 내용을 작성해주세요!' name='comment' required></textarea>
            <input type='file'></input>
            <button type='submit'>작성하기</button>
          </form>
        }
        <Review
          data={this.state.Review}
          type={this.props.type}
          doEdit={this.doEditComment}
          doDisplay={this.doDisplay}
          HandleReviewComment={this.HandleReviewComment}
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