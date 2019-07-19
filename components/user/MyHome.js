import Link from 'next/link';
import React, { Component } from 'react';
import db from '../../common/db';
import { observable } from 'mobx';
import { observer } from "mobx-react";
import user from '../../common/store/user';
import { Button, Alert } from 'react-bootstrap';

import MyTeamList from './MyTeamList';
import TeamList from './../team/TeamList';

class Data {
    @observable myteams = [];
}

@observer
class MyHome extends Component {
    data = new Data()

    constructor(props) {
        super(props)
        this.state = {
            show: true
        }
    }

    componentDidMount() {
        if (user.info.uid) {
            db.collection('my_team')
                .where('user_id','==',user.info.uid)
                .where('check','==',"Y")
                .get()
                .then(res => {
                    const newMyTeams = []
                    res.forEach(doc => {
                        const docData = doc.data()
                        docData.id = doc.id
                        newMyTeams.push(docData)
                    })
                    this.data.myteams = newMyTeams
                })
                .catch(error => {
                    alert(error.message)
                    console.log(error)
                })
        }
    }

    render() {
        const handleDismiss = () => this.setState({ show: false });
        return (
            <div>
                {
                    //로그인
                    this.data.myteams.length !== 0
                    ? ( <MyTeamList myteams={this.data.myteams}/>)
                    : (
                        // <Alert show={this.state.show} variant="primary" onClose={handleDismiss} dismissible>
                        <Alert show={this.state.show} variant="primary">
                            <Alert.Heading>MY TEAM</Alert.Heading>
                            <p>
                                등록된 팀이 없습니다.<br />
                                {user.info.uid !== "" ? (
                                    `팀을 등록하여 마이팀을 만들어보세요.`
                                ) 
                                : (
                                    `로그인하여 마이팀을 만들어보세요.`
                                )}
                            </p>

                            {user.info.uid !== "" && 
                                <Link href="/teamreg">
                                    <Button variant="light" style={{width: "100%"}}>
                                        팀 등록하기
                                    </Button>
                                </Link>
                            }
                        </Alert>
                    )
                }
            </div>
        )
    }

}
export default MyHome;
