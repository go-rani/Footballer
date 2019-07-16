import React, { Component } from 'react';
// import Link from 'next/link';
import { Link } from '../../routes';
import db from '../../common/db';
import { observable } from 'mobx';
import { observer } from "mobx-react";
import { Card, Image, Row, Col } from 'react-bootstrap';

class Data {
    @observable teams = [];
}

@observer
class TeamList extends Component {
    data = new Data()

    constructor(props) {
        super(props)
        db.collection('teams')
            .get()
            .then(res => {
                const newTeams = []
                res.forEach(doc => {
                    const docData = doc.data()
                    docData.id = doc.id
                    newTeams.push(docData)
                })
                this.data.teams = newTeams
                // console.log(newTeams)
            })
            .catch(error => {
                alert(error.message)
                console.log(error)
            })
    }

    render() {
        let num = 0
        return (
            <div>
                {this.data.teams.map( (team) => {
                    num = num +1
                    return (
                        <div className="card_div" style={num%2 == 1 ? {paddingRight:"5px"} : {paddingLeft: "5px"}} key={team.id}>
                            <Link route={`/teams/${team.id}`}>
                                <div style={{ width:"100%", position:"relative"}}>
                                    {/* <div style={{backgroundImage:`url(${team.emblem_thumb})`, width:"100%", paddingBottom: "75%", backgroundSize:"cover"}}></div> */}
                                    <div style={{backgroundImage:`url(../static/team_test0${num}.png)`, width:"100%", paddingBottom: "75%", backgroundSize:"cover"}}></div>
                                    {/* <div style={{position:"absolute", width:"40px", height:"20px", right:"5%", top:"4%", backgroundColor:"#333",}}> */}
                                    <div className="tag">
                                        {team.category}
                                    </div>
                                    <div style={{paddingTop:"8px"}}>
                                        <p className="title">{team.club_name}</p>
                                        <p className="content"><small>서울>잠실, 여성</small></p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                })}
                <style jsx>
                    {`
                        p {
                            margin: 0px;
                        }

                        .card_div {
                            width: 50%;
                            float: left;
                            padding-bottom: 15px;
                        }

                        .tag {
                            border-radius: 3px;
                            position: absolute;
                            right: 5%;
                            top: 4%;
                            background: rgba(0,0,0,.3);
                            color: #fff;
                            width: 40px;
                            height: 20px;
                            font-size: 12px;
                            font-weight: 400;
                            justify-content: center;
                            align-items: center;
                            display: flex;
                        }

                        .title {
                            font-weight: bold;
                            color: #111111;
                        }
                        .content {
                            color: #666;
                        }
                    `}
                </style>
            </div>
        )
    }

}
export default TeamList;