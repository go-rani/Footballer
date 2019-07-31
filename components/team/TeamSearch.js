import React, { Component } from 'react';
import Link from 'next/link';

import db from '../../common/db';
import { observable } from 'mobx';
import { observer } from "mobx-react";
import { Card, Image, Row, Col } from 'react-bootstrap';

class Data {
    @observable teams = [];
}

@observer
class TeamSearch extends Component {
    data = new Data()

    constructor(props) {
        super(props)
        this.data.teams = props.teamsData

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
            <div>
                <div className="search_wrap">
                    <div className="select_wrap">
                        <select className="select_cate01">
                            <option>혼성</option>
                            <option>남성</option>
                            <option>여성</option>
                        </select>
                        <select className="select_cate01" style={{margin:"0px 10px"}}>
                            <option>풋살</option>
                            <option>축구</option>
                        </select>
                        <select className="select_cate01" style={{width:"78px"}}>
                            <option>서울</option>
                            <option>경기</option>
                            <option>인천</option>
                            <option>부산</option>
                        </select>
                        <button className="btn_search">검색</button>
                    </div>
                    <div className="input_wrap">
                        <input className="input_search" placeholder="검색"/>
                    </div>
                </div>
                <div style={{display:"flow-root", margin:"20px", paddingTop:"15px", borderTop: "1px solid #eff3f6"}}>
                    {this.data.teams.map( (team) => {
                        num = num +1
                        return (
                            <div className="card_div" style={num%2 == 1 ? {paddingRight:"10px"} : {paddingLeft: "10px"}} key={team.id}>
                                {/* <Link route={`/teams/${team.id}`}> */}
                                <Link as={`/teams/${team.id}`} href={`/teams?teamId=${team.id}`}>
                                    <div style={{ width:"100%", position:"relative"}}>
                                        <div style={{backgroundImage:`url(../static/team_test0${num}.png)`, width:"100%", paddingBottom: "75%", backgroundSize:"cover", borderRadius:"6px"}}></div>
                                        <div className="tag">
                                            {team.category}
                                        </div>
                                        <div style={{paddingTop:"8px"}}>
                                            <p className="title">{team.club_name}</p>
                                            <p className="content"><small>{team.gender}, {team.location} </small></p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
                <style jsx>
                    {`
                        p {
                            margin: 0px;
                        }

                        .search_wrap {
                            margin-top: 20px;
                            margin-bottom: 20px;
                        }

                        .select_wrap {
                            padding: 0px 20px;
                            height: 60px;
                            border-top: 1px solid #e1e4e7;
                            border-bottom: 1px solid #e1e4e7;
                            line-height: 58px;
                            background-color: #f4f7f8;
                        }

                        .select_cate01 {
                            position: relative;
                            width: 65px;
                            padding-left: 8px;
                            display: inline-block;
                            -webkit-box-sizing: border-box;
                            box-sizing: border-box;
                            height: 34px;
                            border: 1px solid #e0e5e8;
                            -webkit-border-radius: 6px;
                            border-radius: 6px;
                            font-size: 14px;
                            font-weight: 500;
                            line-height: 32px;
                            color: #666;
                            background-color: #fff;
                        }

                        .btn_search {
                            margin-left: 16px;
                            background-color: #444;
                            padding: 0 11px;
                            border-radius: 6px;
                            font-size: 14px;
                            color: #fff;
                            width: 90px;
                            border: 0px;
                            display: inline-block;
                            line-height: 32px;
                            box-shadow: 0 2px 8px 0 rgba(37, 50, 67, 0.18), 0 1px 1px 0 rgba(37, 50, 67, 0.03);
                        }

                        .input_wrap {
                            position: relative;
                            -webkit-box-sizing: border-box;
                            box-sizing: border-box;
                            display: block;
                            margin-top: 20px;
                            margin-left: 20px;
                            margin-right: 20px;
                            height: 47px;
                            border: 1px solid #d3d7da;
                            -webkit-border-radius: 6px;
                            border-radius: 6px;
                            -webkit-box-shadow: 0 3px 4px 0 rgba(37, 50, 67, 0.03), 0 1px 1px 0 rgba(37, 50, 67, 0.03);
                            box-shadow: 0 3px 4px 0 rgba(37, 50, 67, 0.03), 0 1px 1px 0 rgba(37, 50, 67, 0.03);
                            background-color: #fff;
                            text-align: left;
                        }

                        .input_search {
                            position: relative;
                            display: block;
                            -webkit-box-sizing: border-box;
                            box-sizing: border-box;
                            width: 100%;
                            padding-left: 42px;
                            height: 45px;
                            font-weight: 700;
                            color: #242424;
                            border: 0;
                            border-radius: 6px;
                        }

                        .card_div {
                            width: 50%;
                            float: left;
                            padding-bottom: 20px;
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
export default TeamSearch;