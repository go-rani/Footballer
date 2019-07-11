import React, { Component } from 'react';
import { useRouter } from 'next/router'
import db from '../../common/db';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import { Card, Button, Alert, Badge } from 'react-bootstrap';

import BannerList from '../main/BannerList';

class Data {
    @observable club_name = ""
    @observable exercise_date = ""
    @observable foundation_day = ""
    @observable head_count = ""
    @observable location = ""
    @observable stadium = ""

}

@observer
class TeamDetail extends Component {
    data = new Data()

    constructor(props) {
        super(props)
        this.state = {
            joinBtnShow : false,
        }

        this._handleClose = this._handleClose.bind(this)
        this._handleShow = this._handleShow.bind(this)

        if (this.props.teamID) {
            db.collection('teams').doc(this.props.teamID)
                .get()
                .then(res => {
                    
                    this.data.club_name = res.data().club_name
                    this.data.exercise_date = res.data().exercise_date
                    this.data.foundation_day = res.data().foundation_day
                    this.data.head_count = res.data().head_count
                    this.data.location = res.data().location
                    this.data.stadium = res.data().stadium
                    
                    // console.log(this.data)
                })
                .catch(error => {
                    alert(error.message)
                    console.log(error)
                })
        }   
    }

    _handleClose() {
        this.setState({ joinBtnShow : false })
    }

    _handleShow() {
        this.setState({ joinBtnShow : true })
    }

    render() {
        
        return (
            <div style={{minHeight:"600px"}}>
                <div style={{paddingBottom:"30px"}}>
                    <BannerList />
                </div>
                <div>
                    <h5>{this.data.club_name}</h5>
                    <div>
                        <small style={{paddingRight:"8px"}}>#풋살</small>
                        <small style={{paddingRight:"8px"}}>#잠실</small>
                        <small>#여자</small>
                    </div>
                    <div style={{margin:"10px 0px"}}>
                        <Button  style={{width:"49%", marginRight:"1%"}} variant="outline-info">문의하기</Button>
                        { this.state.joinBtnShow 
                            ? <Button style={{width:"49%", marginLeft:"1%"}} variant="outline-dark" onClick={this._handleClose}>팀 탈퇴하기</Button>
                            : <Button style={{width:"49%", marginLeft:"1%"}} variant="outline-success" onClick={this._handleShow}>팀 가입하기</Button>
                        }
                    </div>
                </div>
                <div>
                    <Alert style={{backgroundColor:"#f8f9fa"}}>
                        <p>{this.data.foundation_day}</p>
                        <p>{this.data.exercise_date}</p>
                        <p>{this.data.head_count}</p>
                        <p>성남시 > 분당구</p>
                        <p>황새울풋살장</p>
                    </Alert>
                </div>
                <div>
                    
                </div>
                <div>
                    <h5>경기일정</h5>
                    <Card>
                        <Card.Header>7/31 (수) PM 8:00 ~ 10:00</Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                                <div>
                                    <strong>경기장: </strong> 잠실 올팍축구장
                                    <Button variant="secondary" size="sm">주소 복사</Button>
                                </div>
                                <div style={{fontSize:"12pt"}}>
                                    <Badge variant="warning" className="mr-1">매칭 구함</Badge>
                                    <Badge variant="primary">용병 구함</Badge>
                                </div>
                            </blockquote>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        )
    }

}
export default TeamDetail;