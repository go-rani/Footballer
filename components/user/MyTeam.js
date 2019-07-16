import React, { Component } from 'react';
import Router from 'next/router';
// import Link from 'next/link';
import { Link } from '../../routes';
import db from '../../common/db';
import user from '../../common/store/user';

import { Card, Button, Alert, Form } from 'react-bootstrap';
import MySchedule from './MySchedule';
import MyNotice from './MyNotice';


class MyTeam extends Component {

    constructor(props) {
        super(props)
        
        if (user.info.uid) {
            db.collection('my_team')
                .where('user_id','==',user.info.uid)
                .get()
                .then(res => {
                    if (res.empty == true) {
                        Router.back()
                        //팀 들어왔을때 자기 팀인지 확인 아니면 팅겨야함
                    }
                })
                .catch(error => {
                    alert(error.message)
                    console.log(error)
                })
        }
    }

    render() {
        // console.log(this.props.teamID)
        
        return (
            <div>
                {/* fde7c699-e16b-451f-ba1d-6f2d5df8310b */}
                <div>
                    {/* <h5>공지사항</h5> */}
                    <MyNotice noticeID="test"/>
                </div>

                <div style={{padding:"20px 0px"}}>
                    {/* <h5>경기일정</h5> */}
                    <MySchedule scheduleID="test"/>
                </div>
                
                <div style={{padding:"20px 0px"}}>
                    <h5>팀정보</h5>
                    <div className="bd-callout">
                        <h5>FC치키토</h5>
                        {/* <Link href="/team/[id]" as={`/team/56b65efc-f0aa-4d47-94f0-3e957d418753`}> */}
                        <Link route={`/teams/56b65efc-f0aa-4d47-94f0-3e957d418753`}>
                            <Button variant="light" style={{width: "100%"}}>
                                상세페이지
                            </Button>
                        </Link>
                    </div>
                </div>
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
export default MyTeam;
