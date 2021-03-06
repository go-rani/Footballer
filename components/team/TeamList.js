import React, { Component } from 'react';
import Link from 'next/link';
import db from '../../common/db';
import { observable } from 'mobx';
import { observer } from "mobx-react";

class Data {
    @observable teams = [];
}

@observer
class TeamList extends Component {
    data = new Data()

    constructor(props) {
        super(props)
        this.data.teams = props.teams

        db.collection('teams').onSnapshot(res => {
            const newTeams = []
            res.forEach(doc => {
                const docData = doc.data()
                docData.id = doc.id
                newTeams.push(docData)
            })
            this.data.teams = newTeams
        })
    }

    render() {
        let num = 0
        return (
            <div style={{display:"flow-root"}}>
                {this.data.teams.map( (team) => {
                    num = num +1
                    return (
                        <div className="card_div" style={num%2 == 1 ? {paddingRight:"10px"} : {paddingLeft: "10px"}} key={team.id}>
                            <Link href={{ pathname: '/teams', query: { id: `${team.id}` } }} as={`/teams/${team.id}`}>
                            {/* <Link as={`/teams/${team.id}`} href={`/teams?teamId=${team.id}`}> */}
                                <div style={{ width:"100%", position:"relative"}}>
                                    {/* <div style={{backgroundImage:`url(${team.emblem_thumb})`, width:"100%", paddingBottom: "75%", backgroundSize:"cover"}}></div> */}
                                    <div style={{backgroundImage:`url(../static/team_test0${num}.png)`, width:"100%", paddingBottom: "75%", backgroundSize:"cover"}}></div>
                                    {/* <div style={{position:"absolute", width:"40px", height:"20px", right:"5%", top:"4%", backgroundColor:"#333",}}> */}
                                    <div className="tag">
                                        {team.category}
                                    </div>
                                    <div style={{paddingTop:"8px"}}>
                                        <p className="title">{team.club_name}</p>
                                        <div className="content">
                                            <span className="gender">{team.gender}</span>
                                            <span>{team.location}</span>
                                        </div>
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
                            padding-bottom: 20px;
                        }

                        .tag {
                            // border-radius: 3px;
                            position: absolute;
                            right: 0%;
                            top: 0%;
                            background: rgba(0,0,0,.8);
                            color: #fff;
                            width: 38px;
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
                            font-size: 12px;
                        }
                        .content img {
                            width: 10px;
                            margin-right: 3px;
                            margin-bottom: 2px;
                        }
                        .content .gender:after {
                            display: inline-block;
                            content: '';
                            position: relative;
                            width: 1px;
                            height: 7px;
                            margin: 0 5px;
                            background-color: #d7d7d7;
                        }
                    `}
                </style>
            </div>
        )
    }

}
export default TeamList;