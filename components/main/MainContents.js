import React, { Component } from 'react';
import { Button, Alert } from 'react-bootstrap';

import MyHome from '../user/MyHome';
import TeamList from '../team/TeamList';
import BannerList from './BannerList';
import EventList from './EventList';


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
                <div style={{padding:"10px 0px 20px 0px"}}>
                    {/* <h5>Banner List</h5> */}
                    <BannerList />
                </div>

                <div style={{padding:"20px 0px"}}>
                    {/* <h5>MY TEAM</h5> */}
                    <MyHome isLogin={this.state.login}/>
                </div>
                
                <div style={{padding:"20px 0px"}}>
                    <h5 style={{color:"#444444", fontSize:"10pt", fontWeight:"bold"}}>팀 찾기</h5>
                    <TeamList isLogin={this.state.login} teams={this.props.teamsData}/>
                </div>
                
                {/* 로그인 안했으면 이벤트 더필요, 홈개념 */}
                {
                    this.state.login === false && (
                        <div style={{padding:"20px 0px"}}>
                            <h5>login true</h5>
                        </div>
                    )
                }

                <div style={{padding:"20px 0px", clear:"both"}}>
                    <h5 style={{color:"#444444", fontSize:"10pt", fontWeight:"bold"}}>추천 트레이닝</h5>
                    <EventList />
                </div>

            </div>
        )
    }

}
export default MyTeamList;
