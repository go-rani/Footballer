import React, { Component } from 'react';
import db from '../../common/db';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import uuid from 'uuid/v4';
import user from '../../common/store/user';
import { Card, Button, Alert, Badge } from 'react-bootstrap';

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
class TeamDetail extends Component {
    data = new Data()

    constructor(props) {
        super(props)
        this.state = {
            joinBtnShow : false,
            clubName : "",
        }

        this._handleClose = this._handleClose.bind(this)
        this._handleShow = this._handleShow.bind(this)
        
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
            
            //가입여부 가져오기
            if (user.info.uid) {
                db.collection('my_team')
                    .where('user_id','==',user.info.uid)
                    .where('team_id','==',this.props.teamID)
                    .get()
                    .then(res => {
                        if (res.empty == false) {
                            this.setState({ joinBtnShow : true })
                            // res.forEach(doc => {
                            //     const docData = doc.data()
                            //     if (docData.check == "Y") {
                            //         this.setState({ joinBtnShow : true })
                            //     }
                            // })
                        }
                    })
                    .catch(error => {
                        alert(error.message)
                        console.log(error)
                    })
            }
        }
    }

    _handleClose() {
        this.setState({ joinBtnShow : false })
    }

    _handleShow() {
        if (user.info.uid) {
            const teamJoin = {
                team_id : this.props.teamID,
                user_id : user.info.uid,
                club_name : this.state.clubName,
                check : 'N'
            }
            const uid = uuid()

            db.collection('my_team')
                .doc(uid)
                .set(teamJoin)
                .then(res => {
                    this.setState({ joinBtnShow : true })
                })
                .catch(error => {
                    alert(error.message)
                    console.log(error)
                    return
                })
        } else {
            alert('로그인 해야해')
        }
    }
    
    //clipboard 써야해
    _handleCopy = (e) => {
        e.preventDefault();
        // console.log(e.ClipboardEvent.clipboardData)
        // e.clipboardData.setData('text/plain', 'Hello, world!');
    }

    render() {
        
        return (
            <div style={{minHeight:"600px"}}>
                <ImageList />
                <div className="data_wrap">
                    <h5 style={{fontWeight:"bold"}}>{this.data.club_name}</h5>
                    <div>
                        <small style={{paddingRight:"8px"}}>#풋살</small>
                        <small style={{paddingRight:"8px"}}>#잠실</small>
                        <small>#여자</small>
                    </div>
                    <Alert style={{backgroundColor:"#f8f9fa"}}>
                        <p>#{this.data.foundation_day} #{this.data.exercise_date} #{this.data.head_count} #{this.data.location} #{this.data.stadium}</p>
                        <p style={{margin:0}}>{this.data.introduce} 췌췌췌 테스트 테스트 합니다. abcdefg 12355 !@#%$^^</p>
                    </Alert>
                    <div>
                        <button>가입 하기</button>
                    </div>
                </div>
                <div className="data_wrap">
                    <h5 style={{color:"#444444", fontSize:"10pt", fontWeight:"bold"}}>경기일정</h5>
                    <Card>
                        <Card.Header>7/31 (수) PM 8:00 ~ 10:00</Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                                <div style={{fontSize:"12pt"}}>
                                    <strong>경기장: </strong> 잠실 올팍축구장
                                    <Button variant="secondary" size="sm" style={{marginLeft:"10px"}} onClick={this._handleCopy}>주소 복사</Button>
                                </div>
                                <div style={{fontSize:"12pt"}}>
                                    <Badge variant="warning" className="mr-1">매칭 구함</Badge>
                                    <Badge variant="primary">용병 구함</Badge>
                                </div>
                            </blockquote>
                        </Card.Body>
                    </Card>
                </div>
                <style jsx>
                    {`
                        .data_wrap {
                            padding: 22px 20px;
                        }

                        .data_wrap button {
                            width: 100%;
                            padding: 12px;
                            line-height: 24px;
                            border-color: transparent !important;
                            text-decoration: none !important;
                            border-radius: 4px !important;
                            background: #3897F0;
                            color: #fff;
                            box-shadow: 0 2px 8px 0 rgba(37,50,67,0.18), 0 1px 1px 0 rgba(37,50,67,0.03);
                        }
                    `}
                </style>
            </div>
        )
    }

}
export default TeamDetail;