import Link from 'next/link';
import React, { Component } from 'react';
import { Button, Alert } from 'react-bootstrap';

import MyTeamList from './MyTeamList';
import TeamList from './../team/TeamList';


class MyHome extends Component {
        
    constructor(props) {
        super(props)
        this.state = {
            show: true
        }
    }

    render() {
        const handleDismiss = () => this.setState({ show: false });
        return (
            <div>
                {
                    //비로그인
                    this.state.show == true
                    ? (
                        <Alert show={this.state.show} variant="primary" onClose={handleDismiss} dismissible>
                            <Alert.Heading>등록된 팀이 없습니다.</Alert.Heading>
                            <p>
                                팀을 등록하거나 가입하여 마이팀을 만들어보세요.
                            </p>
                            <Link href="/teamreg">
                                <Button variant="light" style={{width: "100%"}}>
                                    팀 등록하기
                                </Button>
                            </Link>
                        </Alert>
                    )
                    : ( <MyTeamList />)
                }
            </div>
        )
    }

}
export default MyHome;
