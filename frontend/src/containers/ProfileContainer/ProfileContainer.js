import React, { Component } from 'react';
import { StoreList, ProfileImage, ProfileIntroduce } from '../../components';
import './ProfileContainer.css'

class ProfileContainer extends Component {
  state = {
    store : [ //사장님만 가지고 있는 가게 list를 불러와야함
      {
        id: 1,
        name: '갈비탕',
        content: '9시 부터 영업'
      },
      {
        id: 2,
        name: '피자',
        content: '백종원 피자 맛집'
      }

    ]
  }
  render() {
    return (
      <div>
        프로필 게시판 입니다
        <div className='profilecard'>
          프로필카드(이미지 + 소개글 + 여러 정보)
          <button>프로필 수정하기</button>
          <ProfileImage />
          <ProfileIntroduce />
          <br />
          </div>
          <div className='storelist'>
          가게 목록
          <StoreList data={this.state.store}/>
          </div>
        
      </div>
    );
  }
};

export default ProfileContainer;