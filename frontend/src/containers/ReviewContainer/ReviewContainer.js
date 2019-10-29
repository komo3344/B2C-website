import React, { Component } from 'react';
import { Review } from '../../components'
import logo from '../../image/certifying_shot.jpg'

class ReviewContainer extends Component {
  state = { // this.props.store_id 를 가지고 해당 게시물의 리뷰 데이터 (Review, Review_file, Review_comment 데이터를 전부 불러옴)
    Review : [ //리뷰 하드코딩
      {
        id: '1',
        author: 'tim',
        comment: '먹을만 하네',
        created_at: '2013/8/13',
        star_score: 5,
        comment_ckeck: false,
        file_check: {
          filename: '인증샷 1',
          original_name: 'sdfw123adwe.jpg',
          image: logo
        }
      },
      {
        id: '2',
        author: 'eric',
        comment: '이게 뭐야',
        created_at: '2013/12/3',
        star_score: 4,
        comment_ckeck: {
          author: 'bro',
          comment: '더 맛있게 해드릴게요',
          created_at: '2014/1/1',
        },
        file_check: false
      }
    ]
  }


  render() {
      return (
        <div>
          <h3>리뷰우</h3>
          <Review data={this.state.Review}/>
        </div>
      );

  }
};

export default ReviewContainer;