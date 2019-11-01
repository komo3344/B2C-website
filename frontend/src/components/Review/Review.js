import React, { useState } from 'react'
import logo from '../../image/certifying_shot.jpg'
import './Review.css'

const Review = (props) => {
  const [value, setValue] = useState()
  const [C_edit_comment, set_C_edit_comment] = useState()
  const [C_edit_star_score, setC_edit_star_score] = useState()
  const reviews = props.re
  const re_reviews = props.re_re

  const onChangeComment = e => {
    setValue(e.target.value)
  }

  const onChangeEditComment = e => {
    set_C_edit_comment(e.target.value)
  }
  const onChangeEditStarscore = e => {
    setC_edit_star_score(e.target.value)
  }

  var test
  test = reviews.map((review) =>
    <div className='review' id={review.id} key={review.id}>
      <ul>
        <h1>댓글</h1>
        <ul>
          <img width='300px' height='100px' src={logo} alt='프로필사진못찾으면 뜨는 글' />
        </ul>
        <li>댓글 id :{review.id}</li>
        <li>댓글 가게 id : {review.s_id}</li>
        <li>작성자 : {review.u_id}</li>
        <div id='C_comment'>
          <li>멘트 : {review.comment}</li>
          <li>별점 : {review.star_score}</li>
        </div>
        <div id='C_comment_edit'>
          <form onSubmit={e => {
            props.handle_C_comment_edit(e, review.id, C_edit_comment, C_edit_star_score)
            props.doEdit()
          }}>
            <li>멘트 : <textarea name='C_edit_comment' onChange={onChangeEditComment} value={C_edit_comment}></textarea></li>
            <li>별점 : <input type='number' name='C_edit_star_score' onChange={onChangeEditStarscore} value={C_edit_star_score}></input></li>
            <button type='submit'>수정하기</button>
          </form>
        </div>
        <li>날짜 : {review.created_at}</li>
        {props.type === 'C' &&
          <div id='C_comment_buttons'>
            <button onClick={() => { props.doEdit() }}>수정하기</button>
            <button onClick={(e) => { props.deleteComment(e, review.id) }}>삭제하기</button>
          </div>
        }
        {props.type === 'B' &&
          <div>
            <button id='comment_button' onClick={() => { props.doDisplay() }}>사장님 댓글 달기</button>
            <div id="myDIV">
              <form onSubmit={(e) => {
                props.HandleReviewComment(e, value, review.id)
                props.doDisplay()

              }}>
                <textarea onChange={onChangeComment} value={value} name='re_comment' rows='8' cols='60' placeholder='사장님 댓글을 달아주세요'></textarea>
                <button type='submit'>등록하기</button>
              </form>
            </div>
          </div>
        }
        {re_reviews.map((re_review) =>
          <div>
            {review.id === re_review.r_id &&
              <ul>
                <h1>대댓글</h1>
                <li>대댓글 id :{re_review.id}</li>
                <li>해당 댓글 id : {re_review.r_id}</li>
                <li>사장님 id : {re_review.u_id}</li>
                <li>멘트 : {re_review.comment}</li>
                <li>날짜 : {re_review.created_at}</li>
                {props.type === 'B' &&
                  <div id='buttons'><button onClick={() => { props.doEdit() }}>수정하기</button><button onClick={(e) => props.deleteReComment(e, re_review.id)}>삭제하기</button></div>}
              </ul>
            }
          </div>
        )}
      </ul>
    </div>
  )
  return (
    <div>
      {test}
    </div>
  );
}

export default Review;