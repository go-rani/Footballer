import Link from 'next/link';
import React, { Component } from 'react';
import Router from 'next/router';
import firebase from '../../common/firebase';
import userDB from '../../common/store/user';
import { observer } from 'mobx-react';
// import 'isomorphic-unfetch'
import { Button, Dropdown, DropdownButton, Modal, ButtonToolbar } from 'react-bootstrap';

class LogindModal extends Component {
    _login = () => {
        const provier = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithPopup( provier )
            .then( res => {
                console.log(res)
                userDB.info = {
                    displayName : res.user.displayName,
                    photoURL : res.user.photoURL,
                    email : res.user.email,
                    uid : res.user.uid,
                }
                //localstorage cache
                // localStorage.setItem("userInfo", JSON.stringify(user.info));
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
                        <p style={{padding:"0px", margin:"0px", fontSize:"16px", fontWeight:"bold"}}>FOOTBALLER 로그인</p>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div style={{paddingBottom:"15px"}}>
                        <small className="text-muted">풋볼러는 회원가입을 받지 않습니다.</small><br />
                        <small className="text-muted">구글 계정을 통한 로그인만 가능합니다.</small><br />
                    </div>
                    <Button variant="light" style={{justifyContent:"center", width:"100%", borderColor: "#6c757d"}} onClick={this._login}>구글 계정으로 시작하기</Button>
                </Modal.Body>
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
        
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                userDB.info.uid = user.uid
                return user
                    .getIdToken()
                    .then(token => {
                        // eslint-disable-next-line no-undef
                        return fetch('/api/login', {
                            method: 'POST',
                            // eslint-disable-next-line no-undef
                            headers: new Headers({ 'Content-Type': 'application/json' }),
                            credentials: 'same-origin',
                            body: JSON.stringify({ token })
                        })
                    })
            } else {
                userDB.info.uid = ""
                // this.setState({ user: null })
                // eslint-disable-next-line no-undef
                fetch('/api/logout', {
                    method: 'POST',
                    credentials: 'same-origin'
                })
            }
        })


        // if (user.info.displayName == "" && localStorage.hasOwnProperty("userInfo")) {
        //     const cacheUser = JSON.parse(localStorage.getItem("userInfo"))
        //     user.info = {
        //         displayName : cacheUser.displayName,
        //         photoURL : cacheUser.photoURL,
        //         email : cacheUser.email,
        //         uid : cacheUser.uid,
        //     }
        // }
    }

    _logout = () => {
        firebase.auth().signOut()
            .then( res => {
                userDB.info.uid = ""
                // localStorage.removeItem("userInfo");
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
                {userDB.info.uid === "" &&(
                    // <Button variant="outline-secondary" size="sm" onClick={this._login}>로그인</Button>
                    <ButtonToolbar>
                        <a className="text-decoration-none text-reset" style={{fontSize:"14px"}} onClick={() => this.setState({ modalShow: true })}>로그인</a>
                        {/* <button onClick={() => this.setState({ modalShow: true })}>로그인</button> */}
                        {/* <Button variant="outline-secondary" size="sm" onClick={() => this.setState({ modalShow: true })}>IN</Button> */}
                        <LogindModal show={this.state.modalShow} onHide={modalClose} />
                    </ButtonToolbar>
                )}
                {userDB.info.uid !== "" &&(
                   <DropdownButton variant="outline-secondary" title="@" size="sm" alignRight style={{fontSize:"12px"}}>
                        <a className="dropdown-item">HI! {userDB.info.displayName}님</a>
                        {/* <Link href="/teamreg"><a className="dropdown-item">팀등록</a></Link> */}
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