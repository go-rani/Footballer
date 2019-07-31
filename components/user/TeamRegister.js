import React, { Component } from 'react';
import Router from 'next/router';
import db from '../../common/db';
import uuid from 'uuid/v4';
import user from '../../common/store/user';
import { Card, Button, Form, Row, Col } from 'react-bootstrap';


class TeamRegister extends Component {
        
    constructor(props) {
        super(props)
    }

    _regTeam = () => {
        if (this.name.value == "") {
            alert("팀명을 입력해주세욥")
            this.name.focus()
            return
        }
        const now = new Date()
        const uid = uuid()
        const club_name = this.name.value
        const location = this.location.value
        const category = this.category.value
        const gender = this.gender.value
        const team = {
            club_name : club_name,
            content : "",
            date : now,
            emblem_thumb : "",
            exercise_date : "토요일 9시",
            foundation_day : "2002년 월드컵",
            head_count : "1",
            introduce: "intro",
            location : location,
            stadium : "늘초",
            category : category,
            gender : gender
        }

        db.collection('teams')
            .doc(uid)
            .set(team)
            .then(res => {
                
            })
            .catch(error => {
                alert(error.message)
                console.log(error)
                return
            })
        
        const myTeam = {
            team_id : uid,
            user_id : user.info.uid
        }

        db.collection('my_team')
            .doc(uid)
            .set(myTeam)
            .then(res => {
                Router.push('/regconfirm')
            })
            .catch(error => {
                alert(error.message)
                console.log(error)
                return
            })
    }

    render() {
        return (
            <div style={{padding:"20px 20px"}}>
                <Card border="info">
                    <Card.Header className="bg-info" style={{color:'white'}}>팀 등록: 간편하게 등록하기</Card.Header>
                    <Card.Body>
                        <Form>
                            <Form.Group as={Row} controlId="formHorizontalEmail">
                                <Form.Label column md={2}>팀명</Form.Label>
                                <Col md={7}>
                                    <input className="form-control" ref={ ref => this.name = ref } placeholder="최대10글자, 한글/영문/숫자만 가능" />
                                
                                </Col>
                                <Col md={3}>
                                    <Button variant="secondary">중복확인</Button>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formHorizontalPassword">
                                <Form.Label column md={2}>분류</Form.Label>
                                <Col md className="pb-2">
                                    <Form.Control as="select" ref={ ref => this.category = ref }>
                                        <option>축구</option>
                                        <option>풋살</option>
                                    </Form.Control>
                                </Col>
                                <Col md className="pb-2">
                                    <Form.Control as="select" ref={ ref => this.gender = ref }>
                                        <option>혼성</option>
                                        <option>남성</option>
                                        <option>여성</option>
                                    </Form.Control>
                                </Col>
                                <Col md className="pb-2">
                                    <Form.Control as="select" ref={ ref => this.location = ref }>
                                        <option>서울</option>
                                        <option>경기</option>
                                        <option>인천</option>
                                        <option>부산</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formHorizontalCheck">
                                <Col sm={{ span: 10, offset: 2 }}>
                                <Form.Check label="Remember me" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row}>
                                <Col sm={{ span: 10, offset: 2 }}>
                                <Button variant="info" onClick={this._regTeam}>등록하기</Button>
                                </Col>
                            </Form.Group>
                        </Form>
                    </Card.Body>
                </Card>

            </div>
        )
    }

}
export default TeamRegister;
