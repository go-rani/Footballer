import React, { Component } from 'react';
import Link from 'next/link';
import db from '../../common/db';
import { observable } from 'mobx';
import { observer } from "mobx-react";
import user from '../../common/store/user';
import uuid from 'uuid/v4';
import noticeStore from '../../common/store/notice';

import { Card, Button, Modal, Alert, Badge } from 'react-bootstrap';

class Data {
    @observable noticeList = [];
}

@observer
class NoticeModal extends Component {

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
            is_display : "Y",
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

    
    _noticeDel = () => {
        
        db.collection('my_team_notice')
            .doc(noticeStore.key)
            .update({
                is_display : "N"
            })
            .then(res => {
                this.props.parent_method()
            })
            .catch(error => {
                alert(error.message)
                console.log(error)
                return
            })

    }

    _noticeUpdate = () => {

    }

    render() {
        return (
            <Modal
                {...this.props}
                aria-labelledby="contained-modal-title-vcenter"
                centered >
                <Modal.Header closeButton>
                    <h5 id="contained-modal-title-vcenter" style={{margin:"0px", fontWeight:"bold"}}>
                        {this.props.is_add == "true"
                            ? ( "공지 추가" )
                            : ( "공지 수정" )
                        }
                    </h5>
                </Modal.Header>
                <Modal.Body>
                    {this.props.is_add == "true"
                        ? ( 
                            <div>
                                <input className="form-control" ref={ ref => this.title = ref } placeholder="제목" /><br/>
                                <input className="form-control" ref={ ref => this.contents = ref } placeholder="내용" />
                            </div>
                        )
                        : ( 
                            <div>
                                <input className="form-control" ref={ ref => this.title = ref } defaultValue={noticeStore.title} /><br/>
                                <input className="form-control" ref={ ref => this.contents = ref } defaultValue={noticeStore.contents} />
                            </div>
                        )
                    }
                    {/* <p style={{margin:0}}>
                        색깔 변경 라디오
                    </p> */}
                    {/* <small className="text-muted">정보 수정</small> */}
                </Modal.Body>
                <Modal.Footer>
                    {this.props.is_add == "true"
                        ? ( <Button variant="light" style={{justifyContent:"center", width:"100%", borderColor: "#6c757d"}} onClick={this._noticeAdd}>공지 추가</Button> )
                        : ( 
                            <div style={{width:"100%"}}>
                                <Button variant="light" style={{justifyContent:"center", width:"50%", borderColor: "#6c757d"}} onClick={this._noticeUpdate}>수정하기</Button>
                                <Button variant="light" style={{justifyContent:"center", width:"50%", borderColor: "#6c757d"}} onClick={this._noticeDel}>삭제하기</Button>
                            </div>
                        )
                    }
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
            isAdd: "true",
        }
        this._getNoticeList = this._getNoticeList.bind(this);
        this.someMethod = this.someMethod.bind(this);
        this._titleClick = this._titleClick.bind(this);
    }

    componentDidMount() {
        this._getNoticeList()
    }

    _getNoticeList = () => {
        db.collection('my_team_notice')
            .where('team_id','==',this.props.teamID)
            .where('is_display','==',"Y")
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

    someMethod() {
        this._getNoticeList()
        this.setState({
            modalShow: false
        })
    }

    _titleClick = (key, e) => {
        this.setState({
            modalShow: true, 
            isAdd: "false"
        })
        noticeStore.key = key.id
        noticeStore.title = key.title
        noticeStore.contents = key.contents
    }

    _copy = () => {
        console.log("복사")
    }

    render() {
        const handleDismiss = () => this.setState({ alertShow: false })
        const modalClose = () => this.setState({ modalShow: false })

        return (
            <div>
                <div>
                    <h5 style={{float:"left", color:"#444444", fontSize:"10pt", fontWeight:"bold"}}>공지사항</h5>
                    <Button variant="outline-secondary" size="sm" onClick={() => this.setState({ modalShow: true, isAdd: "true" })}>+</Button>
                </div>
                <div style={{clear:"both"}}>
                    {this.data.noticeList.map(notice=>
                        <Alert show={this.state.alertShow} variant="primary" onClose={handleDismiss} dismissible key={notice.id}>
                            <Alert.Heading onClick={this._titleClick.bind(this, notice)}>
                                <p style={{fontSize:"15pt", fontWeight:"bold", marginBottom:"10px"}}>{notice.title}</p>
                            </Alert.Heading>
                            {/* <strong>신한</strong>  */}
                            <div>
                                {notice.contents}
                            </div>
                            <div style={{position:"absolute", right:"10px", bottom:"15px"}}>
                                <Badge variant="light" onClick={this._copy}>복사</Badge>
                            </div>
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
