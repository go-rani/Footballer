import React, { Component } from 'react';
import Link from 'next/link';

import db from '../../common/db';
import { observable } from 'mobx';
import { observer } from "mobx-react";

class Data {
    @observable teams = [];
}

@observer
class TeachSearch extends Component {
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
            <div>
                <div className="teach_wrap">
                    <div className="title_wrap">
                        <span>풋볼러가 추천하는 트레이닝</span>
                    </div>
                    <div className="scroll_wrap">
                        <div className="card_wrap">
                            <div className="img_box">
                                {/* <img src="/static/team_test01.png" alt="main" /> */}
                            </div>
                            <div className="text_box">
                                <p>풋볼러가 추천하는 1</p>
                                <small>메인에 컨텐츠 넣을거야 트레이닝 괜츈한가 테스트</small>
                            </div>
                        </div>
                        <div className="card_wrap">
                            <div className="img_box">
                                {/* <img src="/static/team_test01.png" alt="main" /> */}
                            </div>
                            <div className="text_box">
                                <p>풋볼러가 추천하는 2</p>
                                <small>메인에 컨텐츠 넣을거야 트레이닝 괜츈한가 테스트</small>
                            </div>
                        </div>
                        <div className="card_wrap">
                            <div className="img_box">
                                {/* <img src="/static/team_test01.png" alt="main" /> */}
                            </div>
                            <div className="text_box">
                                <p>풋볼러가 추천하는 3</p>
                                <small>메인에 컨텐츠 넣을거야 트레이닝 괜츈한가 테스트</small>
                            </div>
                        </div>
                        <div className="card_wrap" style={{paddingRight:"20px"}}>
                            <div className="img_box">
                                {/* <img src="/static/team_test01.png" alt="main" /> */}
                            </div>
                            <div className="text_box">
                                <p>풋볼러가 추천하는 4</p>
                                <small>메인에 컨텐츠 넣을거야 트레이닝 괜츈한가 테스트</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{padding:"30px 20px 0px", clear:"both"}}>
                    <h5 style={{color:"#444444", fontSize:"10pt", fontWeight:"bold", marginBottom:"0px"}}>트레이닝 찾기</h5>
                    <div style={{display:"flow-root"}}>
                        {this.data.teams.map( (team) => {
                            num = num +1
                            if (num > 2) return;
                            return (
                                <div className="product_item" key={team.id}>
                                    <Link href={{ pathname: '/teach', query: { id: `${team.id}` } }} as={`/teach/${team.id}`}>
                                        <div style={{display:"flex"}}>
                                            <div className="thumb_wrap">
                                                <div style={{backgroundImage:`url(../static/team_test0${num}.png)`}} className="thumb_img"></div>
                                                <div className="tag">{team.category}</div>
                                            </div>
                                            <div className="info_wrap">
                                                <div className="title_area">
                                                    <p className="title">{team.club_name}</p>
                                                    <button className="btn_state">모집</button>
                                                </div>
                                                <p className="content"><small>서울시 > 상암동 > 월드컵 경기 1구장</small></p>
                                                <p className="content"><small>매주 금요일 21:00 ~ 23:00</small></p>
                                                <span className="content flag"><small>18만원</small></span>
                                                <span className="content"><small>그룹인원 30명</small></span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                </div>  
                <style jsx>
                    {`
                        .teach_wrap {
                            padding: 30px 0px 30px;
                            overflow: hidden;
                            // background: #222;
                            background: #f2f2f2;
                            position: relative;
                            z-index: 1;
                        }
                        .teach_wrap .title_wrap {
                            font-size: 15px;
                            color: #6a6a6a;
                            position: relative;
                            text-align: center;
                        }
                        .teach_wrap .title_wrap:before {
                            content: '';
                            width: 100%;
                            height: 1px;
                            background: #666;
                            position: absolute;
                            left: 0;
                            top: 10px;
                        }
                        .teach_wrap .title_wrap span {
                            display: inline-block;
                            padding: 0 20px;
                            background: #f2f2f2;
                            position: relative;
                            z-index: 2;
                            text-align: center;
                            margin: auto;
                            color: #333;
                            font-weight: bold;
                        }

                        
                        .scroll_wrap {
                            transform: translate3d(0px, 0px, 0px);
                            // width: 2000px;
                            cursor: move;
                            overflow-x: scroll;
                            overflow-y: hidden;
                            white-space: nowrap;
                            -webkit-overflow-scrolling: touch;
                            scroll-behavior: smooth;
                        }
                        .card_wrap {
                            padding: 20px 0px 10px 20px;
                            display: inline-block !important;
                            white-space: normal !important;
                            vertical-align: top !important;
                        }
                        .card_wrap .img_box {
                            background: transparent url('/static/team_test01.png');
                            background-position: bottom;
                            background-repeat: no-repeat;
                            background-size: cover;
                            height: 130px;
                        }

                        .text_box {
                            background: #fff;
                            position: relative;
                            padding: 14px 10px;
                            -webkit-box-sizing: border-box;
                            -moz-box-sizing: border-box;
                            box-sizing: border-box;
                            box-shadow: 0 2px 8px 0 rgba(37, 50, 67, 0.18), 0 1px 1px 0 rgba(37, 50, 67, 0.03);
                        }
                        .text_box p {
                            font-size: 16px;
                            color: ##111111;
                            font-weight: bold;
                        }
                        .text_box small {
                            color: #666;
                        }



                        
                        p {
                            margin: 0px;
                        }

                        .product_item {
                            // border-top: 1px solid #eff3f6;
                            margin-top: 10px;
                            margin-bottom: 20px;
                            background: #fff;
                        }

                        .tag {
                            position: absolute;
                            right: 0%;
                            top: 0%;
                            // border-radius: 3px;
                            background: rgba(0,0,0,0.8);
                            color: #fff;
                            width: 38px;
                            height: 20px;
                            font-size: 12px;
                            font-weight: 400;
                            justify-content: center;
                            align-items: center;
                            display: flex;
                        }

                        .thumb_wrap {
                            position: relative;
                            flex-shrink: 0;
                            margin-right: 15px;
                        }

                        .thumb_img {
                            background-size: cover;
                            position: relative;
                            width: 98.5px;
                            height: 98.5px;
                            background-position: center;
                        }

                        .info_wrap {
                            position: relative;
                            flex-shrink: 1;
                        }

                        .title_area { display: flex; }
                        .title {
                            font-weight: bold;
                            color: #111111;
                        }
                        .content {
                            color: #666;
                            font-size: 16px;
                        }
                        .flag:after {
                            display: inline-block;
                            content: '';
                            position: relative;
                            width: 1px;
                            height: 9px;
                            margin: 0 6px;
                            background-color: #BDBDBD;
                        }
                        .btn_state {
                            margin-bottom: 5px;
                            margin-top: 3px;
                            border: 1px solid #ed4956;
                            background: #fff;
                            padding: 0px 2px;
                            font-size: 11px;
                            color: #ed4956;
                            display: inline-block;
                            margin-left: 5px;
                            // box-shadow: 0 2px 8px 0 rgba(37, 50, 67, 0.18), 0 1px 1px 0 rgba(37, 50, 67, 0.03);
                        }
                        .gray {
                            border: 1px solid #666;
                            color: #666;
                        }
                    `}
                </style>
            </div>
        )
    }

}
export default TeachSearch;