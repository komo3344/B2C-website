import React from 'react'
import logo from '../../image/certifying_shot.jpg'

const Review = (props) => {
  const ReviewList = props.data
  const list = ReviewList.map((Review) =>
    <div key={Review.id} className='Review'>
      <li>작성자 : {Review.author}
        {Review.file_check && (
          <ul>
            <img width='300px' height='100px' src={logo} alt='프로필사진못찾으면 뜨는 글'/>
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
  console.log(props)
  console.log(list)
  return (
    <div>
      {list}
    </div>
  );
}

export default Review;