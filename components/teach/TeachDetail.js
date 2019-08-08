import React, { Component } from 'react';
import db from '../../common/db';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import user from '../../common/store/user';

import ImageList from '../common/ImageList';

class Data {
    @observable club_name = ""
    @observable exercise_date = ""
    @observable foundation_day = ""
    @observable head_count = ""
    @observable location = ""
    @observable stadium = ""
    @observable introduce = ""
    @observable myteams = []
}

@observer
class TeachDetail extends Component {
    data = new Data()

    constructor(props) {
        super(props)
        this.state = {
            joinBtnShow : false,
            clubName : "",
        }
        
        if (this.props.teamID) {
            //팀 정보 가져오기
            db.collection('teams').doc(this.props.teamID)
                .get()
                .then(res => {
                    
                    this.data.club_name = res.data().club_name
                    this.data.exercise_date = res.data().exercise_date
                    this.data.foundation_day = res.data().foundation_day
                    this.data.head_count = res.data().head_count
                    this.data.location = res.data().location
                    this.data.stadium = res.data().stadium
                    this.data.introduce = res.data().introduce
                    this.setState({ clubName : res.data().club_name })
                    // console.log(this.data)
                })
                .catch(error => {
                    alert(error.message)
                    console.log(error)
                })
        }
    }


    render() {
        
        return (
            <div style={{minHeight:"600px"}}>
                <ImageList />
                <div className="data_wrap">
                    <div><h5>고고고~ 알레 알레</h5></div>
                    <div className="section01">
                        <div className="section_tag">
                        <img src="/static/icon/icon_location.png" />
                            <span>서울시 > 상암동 > 월드컵 경기 1구장</span>
                        </div>
                        <div className="section_tag">
                            <img src="/static/icon/icon_time.png" />
                            <span>매주 금요일 21:00 ~ 23:00 (2시간)</span>
                        </div>
                        <div className="section_tag">
                            <img src="/static/icon/icon_card.png" />
                            <span>18만원</span>
                        </div>
                        <div className="section_tag">
                            <img src="/static/icon/icon_person.png" />
                            <span>그룹인원 30명</span>
                        </div>
                        <div className="section_tag">
                            <img src="/static/icon/icon_check.png" />
                            <span>유니폼, 운동자, 음료수 포함</span>
                        </div>
                        <div className="section_tag">
                            <img src="/static/icon/icon_link.png" />
                            <span>https://goale.co.kr/</span>
                        </div>
                    </div>
                    <div className="section02">
                        <button>모집중 / 등록하기</button>
                        {/* <div>sns</div>
                        <div>모집중</div> */}
                    </div>
                    <div className="section03">
                        <div className="teacher_wrap">
                            <div className="thumbnail">
                                <img src="https://a0.muscache.com/im/users/41778141/profile_pic/1439875453/original.jpg?aki_policy=profile_medium" />
                                <p>이호</p>
                                <p>감독</p>
                            </div>
                            <div className="info">
                                <p>2008년 U리그 MVP</p>
                                <p>2009년 강원FC</p>
                                <p>2010 ~ 2013년 대전 시티즌</p>
                                <p>2013 ~ 2014년 경찰청 축구단</p>
                                <p>2014년 대전 시티즌</p>
                                <p>2015년 태국 타이포트FC</p>
                            </div>
                        </div>
                        <div className="teacher_wrap">
                            <div className="thumbnail">
                                <img src="https://a0.muscache.com/im/users/41778141/profile_pic/1439875453/original.jpg?aki_policy=profile_medium" />
                                <p>고체티노</p>
                                <p>코치</p>
                            </div>
                            <div className="info">
                                <p>2008년 U리그 MVP</p>
                                <p>2009년 강원FC</p>
                                <p>2010 ~ 2013년 대전 시티즌</p>
                                <p>2013 ~ 2014년 경찰청 축구단</p>
                                <p>2014년 대전 시티즌</p>
                                <p>2015년 태국 타이포트FC</p>
                            </div>
                        </div>
                    </div>
                    <div className="section04">
                        <div className="title">
                            <img src="/static/icon/icon_rock.png" />
                            <span>커리큘럼</span>
                        </div>
                        <div className="curriculum">
                            <p>- 1주차(8/1 21:00 ~ 23:00)</p>
                            <p>기초 체력 훈련 및 볼컨트롤 학습</p>
                        </div>
                        <div className="curriculum">
                            <p>- 2주차(8/8 21:00 ~ 23:00)</p>
                            <p>선출도 힘들게 만드는 수비 하기!</p>
                        </div>
                        <div className="curriculum">
                            <p>- 3주차(8/15 21:00 ~ 23:00)</p>
                            <p>축구에서 제일 좋은 기술</p>
                        </div>
                        <div className="curriculum">
                            <p>- 4주차(8/22 21:00 ~ 23:00)</p>
                            <p>달리기 느려도 치달 가능~</p>
                        </div>
                    </div>
                    <div className="section05">
                        <p>선출들이 전하는 실전축구 노하우, 수비의 모든 것 일대일부터 포백까지, 누구나 하나쯤 가지고 있는 필살기 공개합니다! 포지션 아직도 자기가 어딘지 모르시나요? 스루패스 공식?? 1+1 = 2</p>
                    </div>
                </div>
                <div className="more_wrap">
                    <p className="title">MORE 트레이닝</p>
                    <div className="more_data">
                        <div className="another">
                            <p className="location">인천 > 송도</p>
                            <p className="sub">주말, 개인</p>
                            <p className="status">모집중</p>
                        </div>
                        <div className="another">
                            <p className="location">부산 > 남포동</p>
                            <p className="sub">주말, 팀</p>
                            <p className="status">모집중</p>
                        </div>
                    </div>
                </div>
                {/* <div className="fixed_wrap">
                    <div>뭐넣어야하지</div>
                    <div>
                        <button>등록</button>
                    </div>
                </div> */}
                <style jsx>
                    {`
                        p { 
                            padding: 0px;
                            margin: 0px;
                            font-size: 14px;
                        }
                        h5 { font-weight: bold; }
                        span {
                            font-size: 14px;
                            padding-left: 8px;
                        }
                        .data_wrap {
                            padding: 22px 20px;
                        }

                        .section01 {
                            padding: 10px 0px;
                            // border-bottom: 1px solid #EBEBEB; 
                        }
                        .section_tag {
                            padding-bottom: 5px;
                        }
                        .section_tag img {
                            width: 12px;
                            padding-bottom: 2px;
                        }

                        .section02 {
                            padding: 10px 0px;
                        }
                        .section02 button {
                            width: 100%;
                            padding: 12px;
                            line-height: 24px;
                            border-color: transparent !important;
                            text-decoration: none !important;
                            border-radius: 4px !important;
                            background: #3897F0;
                            color: #fff;
                        }

                        .section03 {
                            padding: 20px 0px;
                        }
                        .teacher_wrap { 
                            display: flex; 
                            margin-bottom: 20px;
                            padding: 15px 15px;
                            border-radius: 5px;                            
                            box-shadow: var(--shadow-button-level2-box-shadow, 0 1px 4px rgba(0, 0, 0, 0.16)) !important;
                            // box-shadow: 0 2px 4px rgba(0,0,0,0.1) !important;
                        }
                        .teacher_wrap img {
                            height: 70px;
                            width: 70px;
                            border-radius: 35px;
                        }
                        .teacher_wrap .thumbnail p {
                            text-align: center;
                            padding-top: 10px;
                        }
                        .teacher_wrap .info p {
                            padding-left: 20px;
                            padding-bottom: 5px;
                        }

                        .section04 {
                            padding-bottom: 20px;
                            border-bottom: 1px solid #EBEBEB; 
                        }
                        .section04 .title { padding-bottom: 10px; }
                        .section04 .title img {
                            width: 15px;
                            padding-bottom: 2px; 
                        }
                        .section04 .title span {
                            font-size: 16px;
                            font-weight: bold; 
                        }
                        .section04 .curriculum {
                            padding-bottom: 10px;
                        }

                        .section05 {
                            padding: 20px 0px;
                        }

                        .more_wrap {
                            background-color: rgba(0, 0, 0, 0.02);
                            padding: 30px 20px;
                            border-bottom: 1px solid #EBEBEB;
                        }
                        .more_wrap .title { padding-bottom: 20px; }
                        .more_data {
                            display: flex;
                        }
                        .more_data .another {
                            padding: 15px 20px;
                            margin-right: 10px;
                            border-radius: 5px;
                            background: #fff;
                            box-shadow: 0 2px 4px rgba(0,0,0,0.1) !important;
                        }
                        .more_data .another .location {
                            font-size: 15px;
                            font-weight: bold;
                        }
                        .more_data .another .sub {
                            font-size: 12px;
                            color: #86939e;
                            padding: 5px 0px;
                        }
                        .more_data .another .status {
                            color: #666;
                        }

                        .fixed_wrap {
                            display: flex;
                            padding: 20px 20px;
                            position: fixed !important;
                            bottom: 0px !important;
                            left: 0px !important;
                            right: 0px !important;
                            background: white !important;
                        }
                        .fixed_wrap button {
                            line-height: 24px;
                            border-color: transparent !important;
                            text-decoration: none !important;
                            border-radius: 4px !important;
                            border-width: 2px !important;
                            border-style: solid !important;
                            background: #3897F0;
                            color: #fff;
                        }
                    `}
                </style>
            </div>
        )
    }

}
export default TeachDetail;