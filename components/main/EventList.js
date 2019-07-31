import React, { Component } from 'react';
import Link from 'next/link';
import db from '../../common/db';
import uuid from 'uuid/v4';
import { Button, Card, Row, Col, InputGroup, FormControl, Modal } from 'react-bootstrap';


class EventList extends Component {
    constructor(props, context) {
        super(props, context)

        this._handleClose = this._handleClose.bind(this)
        this._handleShow = this._handleShow.bind(this)

        this.state = {
            show : false,
            emailValue : ""
        }
    }

    _handleClose() {
        this.setState({ 
            show : false,
            emailValue : "",
         })
         this.input.value = ""
    }

    _handleShow() {
        this.setState({ 
            show : true,
            emailValue : this.input.value
        })
    }

    _subscribe = () => {
        const now = new Date()
        const inputValue = this.input.value
        const uid = uuid()
        const email = { //TODO::email 수집 시 analytics 정보 쓸 수 있는지 확인 필요.
            email : inputValue,
            date : now,
        }
        
        db.collection('email_subscribe')
            .doc(uid)
            .set(email)
            .then(res => {
                this.input.value = ""
            })
            .catch(error => {
                alert(error.message)
                console.log(error)
            })

        this._handleClose()
    }

    render() {
        return (
            <div>
                {/* <h5 className="mb-3">추천 트레이닝</h5> */}
                <Row>
                    <Col md={12} style={{marginBottom:"20px"}}>
                        <Link href="/company">
                            <Card>
                                <Card.Img variant="top" src="../../static/footballer_company.png" />
                                <Card.Body>
                                    <div>
                                        <p style={{marginBottom:"5px", fontWeight:"bold"}}>FOOTBALLER 풋볼러</p>
                                        <p style={{fontSize:"10pt", marginBottom:"0px"}}>Connect everything in FOOTBALLER</p>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                    {/* <Col md={6} style={{marginBottom:"20px"}}>
                        <a href="https://jnsportsclub.kr/190" target="_blank">
                            <Card>
                                <Card.Img variant="top" src="../../static/banner_02.png" />
                                <Card.Body>
                                    <div style={{textDecoration:"none", color:"#333"}}>
                                        <p style={{marginBottom:"5px", fontWeight:"bold"}}>JN 치키토 SC 레이디스</p>
                                        <p style={{fontSize:"10pt", marginBottom:"0px"}}>SC 레이디스 여자 풋살팀 신입 회원 모집</p>
                                    </div>
                                </Card.Body>
                            </Card>
                        </a>
                    </Col> */}
                </Row>

                <Card className="text-center mt-2 mb-2">
                    {/* <Card.Header>SUBSCRIBE TO OUR NEWSLETTER</Card.Header> */}
                    <Card.Header>풋볼러 소식 구독하기</Card.Header>
                    <Card.Body>
                        <div>
                            <p style={{fontSize:"11pt"}}>풋볼러에서 제공하는 다양한 이벤트와 매칭 소식을 이메일로 받아보세요.</p>
                        </div>
                        <div style={{margin: 'auto'}}>
                            <InputGroup className="mb-3">
                                {/* <FormControl
                                placeholder="your email"
                                aria-label=""
                                aria-describedby="basic-addon2"
                                ref={ ref => this.input = ref }
                                /> */}
                                <input className="form-control" ref={ ref => this.input = ref } placeholder="your email" />
                                <InputGroup.Append>
                                    <Button variant="outline-secondary" onClick={this._handleShow}>구독하기</Button>
                                </InputGroup.Append>
                            </InputGroup>
                            <Modal show={this.state.show} onHide={this._handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>구독하시겠습니까?</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>이메일 : {this.state.emailValue} </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={this._handleClose}>
                                        닫기
                                    </Button>
                                    <Button variant="primary" onClick={this._subscribe}>
                                        구독하기
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default EventList;