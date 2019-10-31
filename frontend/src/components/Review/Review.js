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
        <li>댓글 id :{review.id}</li>
        <li>댓글 가게 id : {review.s_id}</li>
        <li>작성자 : {review.u_id}</li>
        <li>멘트 : {review.comment}</li>
        <li>별점 : {review.star_score}</li>
        <li>날짜 : {review.created_at}</li>
        <div>
          <button id='comment_button' onClick={() => { props.doDisplay() }}>사장님 댓글 달기</button>
          <div id="myDIV">
            <form onSubmit={() => { props.HandleReviewComment() }}>
              <textarea rows='8' cols='60' placeholder='사장님 댓글을 달아주세요'></textarea>
              <button type='submit'>등록하기</button>
            </form>
          </div>
        </div>
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
                <div id='buttons'><button onClick={() => { props.doEdit() }}>수정하기</button><button>삭제하기</button></div>
              </ul>
            }
          </div>
        )}
      </ul>
    </div>
  )

  const ReviewList = props.data
  var list
  if (props.type === 'C') {
    list = ReviewList.map((Review) =>
      <div key={Review.id} className='Review'>
        <li>작성자 : {Review.u_id}
          {Review.file_check && (
            <ul>
              <img width='300px' height='100px' src={logo} alt='프로필사진못찾으면 뜨는 글' />
            </ul>
          )}
          <ul>
            <li>코멘트 : {Review.comment}</li>
            <li>평점 : {Review.star_score}</li>
            <li>작성일자 : {Review.created_at}</li>
            <button onClick={(e) => { props.deleteComment(e, Review.id) }}>삭제하기</button>

            {Review.comment_ckeck && (
              <ul>
                <span>사장님 댓글</span>
                <li>사장님 이름 : {Review.comment_ckeck.author}</li>
                <li>내용 : {Review.comment_ckeck.comment}</li>
                <li>작성일자 :{Review.comment_ckeck.created_at}</li>
              </ul>
            )}
          </ul>
        </li>
      </div>
    )
  } else if (props.type === 'B') {
    list = ReviewList.map((Review) =>
      <div key={Review.id} className='Review'>
        <li>작성자 : {Review.u_id}
          {Review.file_check && (
            <ul>
              <img width='300px' height='100px' src={logo} alt='프로필사진못찾으면 뜨는 글' />
            </ul>
          )}
          <ul>
            <li>코멘트 : {Review.comment}</li>
            <li>평점 : {Review.star_score}</li>
            <li>작성일자 : {Review.created_at}</li>

            {Review.comment_ckeck ? (
              <ul>
                <span>사장님 댓글</span>
                <div id='boss_comment'>
                  <li>사장님 이름 : {Review.comment_ckeck.author}</li>
                  <li>내용 : {Review.comment_ckeck.comment}</li>
                  <li>작성일자 :{Review.comment_ckeck.created_at}</li>
                </div>
                <div id='buttons'><button onClick={() => { props.doEdit() }}>수정하기</button><button>삭제하기</button></div>
                <div id="edit_comment">
                  <form onSubmit={() => { props.HandleReviewComment() }}>
                    <textarea rows='8' cols='60' placeholder='사장님 댓글을 달아주세요'></textarea>
                    <button type='submit'>등록하기</button>
                  </form>
                </div>
              </ul>
            ) : (
                <div>
                  <button id='comment_button' onClick={() => { props.doDisplay() }}>사장님 댓글 달기</button>
                  <div id="myDIV">
                    <form onSubmit={() => { props.HandleReviewComment() }}>
                      <textarea rows='8' cols='60' placeholder='사장님 댓글을 달아주세요'></textarea>
                      <button type='submit'>등록하기</button>
                    </form>
                  </div>
                </div>
              )}
          </ul>
        </li>
      </div>
    )
  } else {
    list = '잘못 된 타입 입니다'
  }
  return (
    <div>
      {/* {list} */}
      {test}
      {/* {test2} */}
    </div>
  );
}

export default Review;