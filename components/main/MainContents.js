import Link from 'next/link';
import React, { Component } from 'react';
import { Button, Alert } from 'react-bootstrap';

import MyHome from '../user/MyHome';
import TeamList from '../team/TeamList';
import BannerList from './BannerList';


class MyTeamList extends Component {
        
    constructor(props) {
        super(props)
        this.state = {
            show: true,
            login: true,
        }
    }

    render() {
        
        return (
            <div>
                <div style={{padding:"20px 0px"}}>
                    <h5>MY TEAM</h5>
                    <MyHome isLogin={this.state.login}/>
                </div>
                
                <div style={{padding:"20px 0px"}}>
                    <h5>TEAM SEARCH</h5>
                    <TeamList isLogin={this.state.login}/>
                </div>
                
                {/* 로그인 안했으면 이벤트 더필요, 홈개념 */}
                {
                    this.state.login === true && (
                        <div style={{padding:"20px 0px"}}>
                            <h5>login true</h5>
                        </div>
                    )
                }

                <div style={{padding:"20px 0px"}}>
                    <h5>Banner List</h5>
                    <BannerList />
                </div>

            </div>
        )
    }

}
export default MyTeamList;
