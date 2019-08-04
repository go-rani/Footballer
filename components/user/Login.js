import Link from 'next/link';
import React, { Component } from 'react';
import Router from 'next/router';
import firebase from '../../common/firebase';
import user from '../../common/store/user'
import { observer } from 'mobx-react';
import { Button, Dropdown, DropdownButton, Modal, ButtonToolbar } from 'react-bootstrap';

class LogindModal extends Component {
    _login = () => {
        const provier = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithPopup( provier )
            .then( res => {
                user.info = {
                    displayName : res.user.displayName,
                    photoURL : res.user.photoURL,
                    email : res.user.email,
                    uid : res.user.uid,
                }
                //localstorage cache
                localStorage.setItem("userInfo", JSON.stringify(user.info));
            })
            .catch(error => {
                alert('login failed' + error.message)
                console.log(error)
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
                        FOOTBALLER
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5>Hey, nice to see you</h5>
                    <p style={{margin:0}}>
                        나의 축구/풋살 팀을 등록하고, 매치를 성사시켜 보세요.
                    </p>
                    <small className="text-muted">풋볼러는 회원가입을 받지 않습니다. 구글 계정을 통한 로그인만 가능합니다.</small>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="light" style={{justifyContent:"center", width:"100%", borderColor: "#6c757d"}} onClick={this._login}>구글 계정으로 시작하기</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

@observer
class Login extends Component {
    //::TODO, You may have experienced a flicker every time you reload/refresh your browser
    //solution :: HOC higher order component check!!
    constructor(props) {
        super(props)
        this.state = { modalShow: false }
    }

    componentDidMount() {
        if (user.info.displayName == "" && localStorage.hasOwnProperty("userInfo")) {
            const cacheUser = JSON.parse(localStorage.getItem("userInfo"))
            user.info = {
                displayName : cacheUser.displayName,
                photoURL : cacheUser.photoURL,
                email : cacheUser.email,
                uid : cacheUser.uid,
            }
        }
    }

    _logout = () => {
        firebase.auth().signOut()
            .then( res => {
                user.info.uid = ""
                localStorage.removeItem("userInfo");
                Router.push('/')
            })
            .catch(error => {
                alert('logout failed' + error.message)
                console.log(error)
            })
    }

    render() {
        const modalClose = () => this.setState({ modalShow: false })

        return (
            <div>
                {user.info.uid === "" &&(
                    // <Button variant="outline-secondary" size="sm" onClick={this._login}>로그인</Button>
                    <ButtonToolbar>
                        <button onClick={() => this.setState({ modalShow: true })}>로그인</button>
                        {/* <Button variant="outline-secondary" size="sm" onClick={() => this.setState({ modalShow: true })}>IN</Button> */}
                        <LogindModal show={this.state.modalShow} onHide={modalClose} />
                    </ButtonToolbar>
                )}
                {user.info.uid !== "" &&(
                   <DropdownButton variant="outline-secondary" title="user" size="sm" alignRight style={{fontSize:"12px"}}>
                        <a className="dropdown-item">HI! {user.info.displayName}님</a>
                        <Link href="/teamreg"><a className="dropdown-item">팀등록</a></Link>
                        <Link href="/profile"><a className="dropdown-item">마이페이지</a></Link>
                        {/* <Link href="/myteam"><a className="dropdown-item">팀관리</a></Link> */}
                        <Dropdown.Divider />
                        <Dropdown.Item size="sm" onClick={this._logout}>로그아웃</Dropdown.Item>
                    </DropdownButton>
                )}
                <style jsx>
                    {`
                        button {
                            font-size: 12px;   
                        }
                    `}
                </style>
            </div>
        )
    }
}

export default Login;