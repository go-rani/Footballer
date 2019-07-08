import React, { Component } from 'react';
import db from '../../common/db'
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
                    <Col md={6} style={{marginBottom:"20px"}}>
                        <Card>
                            <Card.Img variant="top" src="https://placehold.it/500x250" />
                            <Card.Body>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk
                                of the card's content.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} style={{marginBottom:"20px"}}>
                        <Card>
                            <Card.Img variant="top" src="https://placehold.it/500x250" />
                            <Card.Body>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk
                                of the card's content.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Card className="text-center mt-2 mb-2">
                    <Card.Header>SUBSCRIBE TO OUR NEWSLETTER</Card.Header>
                    <Card.Body>
                        <Card.Text>
                        풋볼러에서 제공하는 다양한 이벤트와 매칭 소식을 이메일로 받아보세요.
                        </Card.Text>
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
                                    <Modal.Title>아래 이메일로 구독하시겠습니까?</Modal.Title>
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