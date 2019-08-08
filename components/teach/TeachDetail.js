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
                    <div>
                        <p>@ 서울시 > 상암동 > 월드컵 경기장 1구장</p>
                        <p>@ 매주 금요일 21:00 ~ 23:00 (2시간)</p>
                        <p>@ 18만원</p>
                        <p>@ 그룹인원 30명</p>
                        <p>@ 유니폼, 운동자, 음료수 포함</p>
                    </div>
                    <div>
                        <div>컨텍 및 sns</div>
                    </div>
                    <div>
                        <div>
                            <div>
                                이미지
                                <p>이호</p>
                            </div>
                            <div>
                                <p>2008년 U리그 MVP</p>
                                <p>2009년 강원FC</p>
                                <p>2010 ~ 2013년 대전 시티즌</p>
                                <p>2013 ~ 2014년 경찰청 축구단</p>
                                <p>2014년 대전 시티즌</p>
                                <p>2015년 태국 타이포트FC</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="more_wrap">
                    <div className="more_data">
                        <p>MORE 트래이닝</p>
                    </div>
                </div>
                <style jsx>
                    {`
                        p { padding: 0px; }
                        h5 { font-weight: bold; }
                        .data_wrap {
                            padding: 30px 20px;
                        }

                        .more_wrap {
                            background-color: rgba(0, 0, 0, 0.02);
                        }
                        .more_data {
                            padding: 30px 20px;
                        }
                    `}
                </style>
            </div>
        )
    }

}
export default TeachDetail;