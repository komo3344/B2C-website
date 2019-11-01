import React from 'react'
import logo from '../../image/certifying_shot.jpg'
import './Review.css'

const Review = (props) => {
  const reviews = props.re
  const re_reviews = props.re_re

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
        <li>멘트 : {review.comment}</li>
        <li>별점 : {review.star_score}</li>
        <li>날짜 : {review.created_at}</li>
        {props.type === 'C' &&
          <button onClick={(e) => { props.deleteComment(e, review.id) }}>삭제하기</button>
        }
        {props.type === 'B' &&
          <div>
            <button id='comment_button' onClick={() => { props.doDisplay() }}>사장님 댓글 달기</button>

            <div id="myDIV">
              <form onSubmit={() => { props.HandleReviewComment() }}>
                <textarea rows='8' cols='60' placeholder='사장님 댓글을 달아주세요'></textarea>
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
                  <div id='buttons'><button onClick={() => { props.doEdit() }}>수정하기</button><button>삭제하기</button></div>}
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