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
class TeachSearch extends Component {
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
                            <option>풋살</option>
                            <option>축구</option>
                        </select>
                        <select className="select_cate01" style={{margin:"0px 10px"}}>
                            <option>서울</option>
                            <option>경기</option>
                            <option>인천</option>
                            <option>부산</option>
                        </select>
                        <select className="select_cate01" style={{width:"78px"}}>
                            <option>성남시</option>
                            <option>시흥시</option>
                            <option>안양시</option>
                            <option>안산시</option>
                            <option>부천시</option>
                        </select>
                        <button className="btn_search">검색</button>
                    </div>
                    <div className="input_wrap">
                        <input className="input_search" placeholder="검색"/>
                    </div>
                </div>
                <div style={{padding:"15px 20px"}}>
                    <div style={{display:"flow-root"}}>
                        {this.data.teams.map( (team) => {
                            num = num +1
                            return (
                                <div className="product_item" key={team.id}>
                                    <Link as={`/teams/${team.id}`} href={`/teams?teamId=${team.id}`}>
                                        <div style={{display:"flex"}}>
                                            <div className="thumb_wrap">
                                                <div style={{backgroundImage:`url(../static/team_test0${num}.png)`}} className="thumb_img"></div>
                                                <div className="tag">{team.category}</div>
                                            </div>
                                            <div className="info_wrap">
                                                <p className="title">{team.club_name}</p>
                                                <p className="content"><small>{team.location} </small></p>
                                                <p className="content"><small>{team.location} </small></p>
                                            </div>
                                        </div>
        
                                        {/* <div style={{ width:"100%", position:"relative"}}>
                                            <div style={{width:"30%", float:"left"}}>
                                                <div style={{backgroundImage:`url(../static/team_test0${num}.png)`, width:"100%", paddingBottom: "75%", backgroundSize:"cover"}}></div>
                                                <div className="tag">
                                                    {team.category}
                                                </div>
                                            </div>
                                            <div style={{width:"70%", float:"left"}}>
                                                <div style={{paddingLeft:"10px"}}>
                                                    <p className="title">{team.club_name}</p>
                                                    <p className="content"><small>{team.location} </small></p>
                                                    <p className="content"><small>{team.location} </small></p>
                                                </div>
                                            </div>
                                        </div> */}
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <style jsx>
                    {`
                        p {
                            margin: 0px;
                        }

                        .search_wrap {
                            margin-top: 20px;
                            margin-bottom: 5px;
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

                        .product_item {
                            border-top: 1px solid #eff3f6;
                            padding-top: 15px;
                            padding-bottom: 15px;
                        }

                        .tag {
                            border-radius: 3px;
                            background: rgba(0,0,0,.2);
                            color: #fff;
                            width: 100%px;
                            height: 20px;
                            font-size: 12px;
                            font-weight: 400;
                            justify-content: center;
                            align-items: center;
                            display: flex;
                            margin-top: 5px;
                        }

                        .thumb_wrap {
                            flex-shrink: 0;
                            margin-right: 15px;
                        }

                        .thumb_img {
                            background-size: cover;
                            position: relative;
                            width: 90px;
                            height: 90px;
                            border-radius: 3px;
                        }

                        .info_wrap {
                            position: relative;
                            flex-shrink: 1;
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
export default TeachSearch;