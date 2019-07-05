import React, { Component } from 'react';
import { Card, Button, Form, Row, Col } from 'react-bootstrap';


class TeamRegister extends Component {
        
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={{padding:"20px 0px"}}>
                <Card border="info">
                    <Card.Header className="bg-info" style={{color:'white'}}>팀 등록</Card.Header>
                    <Card.Body>
                        <Form>
                            <Form.Group as={Row} controlId="formHorizontalEmail">
                                <Form.Label column md={2}>팀명</Form.Label>
                                <Col md={7}>
                                <Form.Control type="email" placeholder="최대10글자, 한글/영문/숫자만 가능" />
                                </Col>
                                <Col md={3}>
                                    <Button variant="secondary">중복확인</Button>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formHorizontalPassword">
                                <Form.Label column md={2}>분류</Form.Label>
                                <Col md className="pb-2">
                                    <Form.Control as="select">
                                        <option>축구</option>
                                        <option>풋살</option>
                                    </Form.Control>
                                </Col>
                                <Col md className="pb-2">
                                    <Form.Control as="select">
                                        <option>성별</option>
                                        <option>남성</option>
                                        <option>여성</option>
                                        <option>혼성</option>
                                    </Form.Control>
                                </Col>
                                <Col md className="pb-2">
                                    <Form.Control as="select">
                                        <option>지역</option>
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
                                <Button variant="info" type="submit">등록하기</Button>
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
