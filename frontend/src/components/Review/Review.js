import React from 'react'
import logo from '../../image/certifying_shot.jpg'
import './Review.css'

const Review = (props) => {
  const ReviewList = props.data
  var list
  if (props.type === 'C') {
    list = ReviewList.map((Review) =>
      <div key={Review.id} className='Review'>
        <li>작성자 : {Review.author}
          {Review.file_check && (
            <ul>
              <img width='300px' height='100px' src={logo} alt='프로필사진못찾으면 뜨는 글' />
            </ul>
          )}
          <ul>
            <li>코멘트 : {Review.comment}</li>
            <li>평점 : {Review.star_score}</li>
            <li>작성일자 : {Review.created_at}</li>

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
        <li>작성자 : {Review.author}
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

  console.log(props)
  console.log(list)
  return (
    <div>
      {list}
    </div>
  );
}

export default Review;