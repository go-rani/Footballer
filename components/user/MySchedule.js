import React, { Component } from 'react';
import Link from 'next/link';
import db from '../../common/db';

import { Card, Button, Modal, Form, ButtonToolbar, OverlayTrigger, Popover, Badge } from 'react-bootstrap';

class ScheduleModal extends Component {
    _login = () => {
        console.log('수정모드')
    }

    render() {
        return (
            <Modal
                {...this.props}
                aria-labelledby="contained-modal-title-vcenter"
                centered >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        일정 수정
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5>Hey, nice to see you</h5>
                    <p style={{margin:0}}>
                        정보 수정
                    </p>
                    <small className="text-muted">정보 수정</small>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="light" style={{justifyContent:"center", width:"100%", borderColor: "#6c757d"}} onClick={this._login}>수정하기</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

class MySchedule extends Component {

    constructor(props) {
        super(props)
        this.state = {
            modalShow: false,
        }
        
        // if (user.info.uid) {
        //     db.collection('my_team')
        //         .where('user_id','==',user.info.uid)
        //         .get()
        //         .then(res => {
        //             if (res.empty == true) {
        //                 Router.back()
        //                 //팀 들어왔을때 자기 팀인지 확인 아니면 팅겨야함
        //             }
        //         })
        //         .catch(error => {
        //             alert(error.message)
        //             console.log(error)
        //         })
        // }
    }

    render() {
        const modalClose = () => this.setState({ modalShow: false })

        return (
            <div>
                <div>
                    <h5 style={{float:"left"}}>경기일정</h5>
                    <Button variant="outline-secondary" size="sm" onClick={() => this.setState({ modalShow: true })}>+</Button>
                </div>
                <div style={{clear:"both"}}>
                    <Card>
                        <Card.Header onClick={() => this.setState({ modalShow: true })}>7/31 (수) PM 8:00 ~ 10:00</Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                                <div>
                                    <strong>경기장: </strong> 잠실 올팍축구장
                                    <Button variant="secondary" size="sm">주소 복사</Button>
                                </div>
                                <div>
                                    <p>description</p>
                                </div>
                                <div style={{fontSize:"12pt", marginBottom:"12px"}}>
                                    <Badge variant="warning" className="mr-1">매칭 구함</Badge>
                                    <Badge variant="primary">용병 구함</Badge>
                                </div>
                                <footer className="blockquote-footer">                                
                                    투표
                                    <Form>
                                        <div style={{width:"50%", float:"left"}}>
                                            <div style={{float:"left"}}>
                                                <Form.Check inline label="참석" type="radio" name="formRadios" id="formRadios1"/>
                                            </div>
                                            <ButtonToolbar>
                                                <OverlayTrigger
                                                    key="bottom"
                                                    placement="bottom"
                                                    overlay={
                                                        <Popover
                                                        id="popover-positioned-right"
                                                        title="참석"
                                                        >
                                                        <strong>shsiss007@gmail.com</strong><br />
                                                        <strong>shsiss007@gmail.com</strong><br />
                                                        <strong>shsiss007@gmail.com</strong><br />
                                                        <strong>shsiss007@gmail.com</strong><br />
                                                        <strong>shsiss007@gmail.com</strong><br />
                                                        </Popover>
                                                    }
                                                    >
                                                    <Button variant="outline-secondary" className="rounded-0 pl-2" size="sm">5명</Button>
                                                </OverlayTrigger>
                                            </ButtonToolbar>
                                        </div>
                                        <div style={{width:"50%", float:"left"}}>
                                            <div style={{float:"left"}}>
                                                <Form.Check inline label="불참" type="radio" name="formRadios" id="formRadios2"/> 
                                            </div>
                                            <ButtonToolbar>
                                                <OverlayTrigger
                                                    key="bottom"
                                                    placement="bottom"
                                                    overlay={
                                                        <Popover
                                                        id="popover-positioned-right"
                                                        title="불참"
                                                        >
                                                        <strong>shsiss007@gmail.com</strong>
                                                        </Popover>
                                                    }
                                                    >
                                                    <Button variant="outline-secondary" className="rounded-0 pl-2" size="sm">1명</Button>
                                                </OverlayTrigger>
                                            </ButtonToolbar>
                                        </div>
                                    </Form>
                                </footer>
                            </blockquote>
                        </Card.Body>
                    </Card>
                </div>
                <ScheduleModal show={this.state.modalShow} onHide={modalClose} />
                <style jsx>
                    {`
                        .bd-callout {
                            padding: 1.25rem;
                            margin-top: 1.25rem;
                            margin-bottom: 1.25rem;
                            border: 1px solid #eee;
                            border-left-width: .25rem;
                            border-radius: .25rem;
                            border-left-color: #f0ad4e;
                        }
                    `}
                </style>
            </div>
        )
    }

}
export default MySchedule;
