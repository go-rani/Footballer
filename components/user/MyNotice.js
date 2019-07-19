import React, { Component } from 'react';
import Link from 'next/link';
import db from '../../common/db';
import { observable } from 'mobx';
import { observer } from "mobx-react";
import user from '../../common/store/user';
import uuid from 'uuid/v4';

import { Card, Button, Modal, Alert } from 'react-bootstrap';

class Data {
    @observable noticeList = [];
}

@observer
class NoticeModal extends Component {
    data = new Data()

    constructor(props) {
        super(props)    
    }

    _noticeAdd = () => {
        if (this.title.value == "") {
            alert("팀명을 입력해주세욥")
            this.title.focus()
            return
        }
        const now = new Date()
        const uid = uuid()
        const title = this.title.value
        const contents = this.contents.value
        const notice = {
            team_id : this.props.team_id,
            title : title,
            contents : contents,
            date : now,
        }

        db.collection('my_team_notice')
            .doc(uid)
            .set(notice)
            .then(res => {
                this.props.parent_method()
            })
            .catch(error => {
                alert(error.message)
                console.log(error)
                return
            })
    }

    render() {
        return (
            <Modal
                {...this.props}
                aria-labelledby="contained-modal-title-vcenter"
                centered >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {this.props.is_add == true
                            ? ( "공지 추가" )
                            : ( "공지 수정" )
                        }
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input className="form-control" ref={ ref => this.title = ref } placeholder="title" />

                    <h5>공지 수정하고 alert 색깔 변경 가능</h5>
                    <p style={{margin:0}}>
                        <input className="form-control" ref={ ref => this.contents = ref } placeholder="" />
                    </p>
                    {/* <small className="text-muted">정보 수정</small> */}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="light" style={{justifyContent:"center", width:"100%", borderColor: "#6c757d"}} onClick={this._noticeAdd}>공지 추가</Button>
                    {/* <Button variant="light" style={{justifyContent:"center", width:"100%", borderColor: "#6c757d"}} onClick={this._onHide}>수정하기</Button> */}
                </Modal.Footer>
            </Modal>
        );
    }
}


@observer
class MyNotice extends Component {
    data = new Data()

    constructor(props) {
        super(props)
        this.state = {
            modalShow: false,
            alertShow: true,
            isAdd: true,
        }
        this._getNoticeList = this._getNoticeList.bind(this);
        this.someMethod = this.someMethod.bind(this);
    }

    componentDidMount() {
        this._getNoticeList()
    }

    _getNoticeList = () => {
        db.collection('my_team_notice')
            .where('team_id','==',this.props.teamID)
            .get()
            .then(res => {
                const noticeList = []
                res.forEach(doc => {
                    const docData = doc.data()
                    docData.id = doc.id
                    noticeList.push(docData)
                })
                this.data.noticeList = noticeList
            })
            .catch(error => {
                alert(error.message)
                console.log(error)
            })
    }

    someMethod = () => {
        this._getNoticeList()
        this.setState({
            modalShow: false
        })
    }

    render() {
        const handleDismiss = () => this.setState({ alertShow: false })
        const modalClose = () => this.setState({ modalShow: false })

        return (
            <div>
                <div>
                    <h5 style={{float:"left"}}>공지사항</h5>
                    <Button variant="outline-secondary" size="sm" onClick={() => this.setState({ modalShow: true, isAdd: true })}>+</Button>
                </div>
                <div style={{clear:"both"}}>
                    {this.data.noticeList.map(notice=>
                        <Alert show={this.state.alertShow} variant="primary" onClose={handleDismiss} dismissible key={notice.id}>
                            <Alert.Heading onClick={() => this.setState({ modalShow: true, isAdd: false })}>{notice.title}</Alert.Heading>
                            <strong>신한</strong> {notice.contents}
                            <Button variant="light" size="sm" onClick={this.someMethod}>
                                복사
                            </Button>
                        </Alert>
                    )}
                </div>
                <NoticeModal show={this.state.modalShow} onHide={modalClose} parent_method={this.someMethod} is_add={this.state.isAdd} team_id={this.props.teamID}/>
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
