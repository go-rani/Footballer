import React, { Component } from 'react';
import Link from 'next/link';
import db from '../../common/db';

import { Card, Button, Modal, Alert } from 'react-bootstrap';

class NoticeModal extends Component {
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
                        공지 수정
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5>공지 수정하고 alert 색깔 변경 가능</h5>
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

class MyNotice extends Component {

    constructor(props) {
        super(props)
        this.state = {
            modalShow: false,
            alertShow: true,
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
        const handleDismiss = () => this.setState({ alertShow: false });
        const modalClose = () => this.setState({ modalShow: false })

        return (
            <div>
                <div>
                    <h5 style={{float:"left"}}>공지사항</h5>
                    <Button variant="outline-secondary" size="sm" onClick={() => this.setState({ modalShow: true })}>+</Button>
                </div>
                <div style={{clear:"both"}}>
                    <Alert show={this.state.alertShow} variant="primary" onClose={handleDismiss} dismissible>
                        <Alert.Heading onClick={() => this.setState({ modalShow: true })}>7월 회비 납부</Alert.Heading>
                        <strong>신한</strong> 110-256-444444
                        <Button variant="light" size="sm">
                            복사
                        </Button>
                    </Alert>
                </div>
                <NoticeModal show={this.state.modalShow} onHide={modalClose} />
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
export default MyNotice;
