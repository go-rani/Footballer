import React, { Component } from 'react';
import Link from 'next/link';

import db from '../../common/db';
import { observable } from 'mobx';
import { observer } from "mobx-react";

import StripBanner from '../common/StripBanner';

class Data {
    @observable teams = [];
}

@observer
class TeachSearch extends Component {
    data = new Data()

    constructor(props) {
        super(props)
        this.data.teams = props.teamsData
        this.state = {
            select_show: "none",
        }

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


    _selectDisplay = () => {
        if (this.state.select_show == "none") this.setState({select_show: "block"})
        else this.setState({select_show: "none"})
    }

    _selectedSub = (e, key) => {
        const text = e.currentTarget.innerText
        const data_cate = Array.from(document.querySelectorAll(key))
        data_cate.map((arr, index) => {
            arr.classList.remove('fick')
        })
        e.currentTarget.classList.add('fick')
        switch(key) {
            case '.cate01':
                return this.refs.cate01.innerText = text
            case '.cate02':
                return this.refs.cate02.innerText = text
            case '.cate03':
                return this.refs.cate03.innerText = text
            case '.cate04':
                return this.refs.cate04.innerText = text
            default:
                return null;
        }
    }

    render() {
        let num = 0
        let num_ = 0
        return (
            <div>
                <div className="search_wrap" onClick={this._selectDisplay}>
                    <div className="selected_wrap">
                        <div ref="cate01" className="selected">All</div>
                        <div ref="cate02" className="selected">서울</div>
                        <div ref="cate03" className="selected">평일</div>
                        <div ref="cate04" className="selected">모집</div>
                    </div>
                    <div className={`selected_btn ${this.state.select_show == "none" ? 'btn_close' : 'btn_open'}`}></div>
                </div>
                <div className="select_wrap" style={{display:`${ this.state.select_show }`}}>
                    <div className="select">
                        <div className="cate01 sub fick" onClick={e => this._selectedSub(e, ".cate01")}>All</div>
                        <div className="cate01 sub" onClick={e => this._selectedSub(e, ".cate01")}>축구</div>
                        <div className="cate01 sub" onClick={e => this._selectedSub(e, ".cate01")}>풋살</div>
                    </div>
                    <div className="select">
                        <div className="cate02 sub fick" onClick={e => this._selectedSub(e, ".cate02")}>서울</div>
                        <div className="cate02 sub" onClick={e => this._selectedSub(e, ".cate02")}>인천</div>
                        <div className="cate02 sub" onClick={e => this._selectedSub(e, ".cate02")}>경기</div>
                        <div className="cate02 sub" onClick={e => this._selectedSub(e, ".cate02")}>부산</div>
                        <div className="cate02 sub" onClick={e => this._selectedSub(e, ".cate02")}>강원</div>
                    </div>
                    <div className="select">
                        <div className="cate03 sub fick" onClick={e => this._selectedSub(e, ".cate03")}>평일</div>
                        <div className="cate03 sub" onClick={e => this._selectedSub(e, ".cate03")}>주말</div>
                        <div className="cate03 sub" onClick={e => this._selectedSub(e, ".cate03")}>토</div>
                        <div className="cate03 sub" onClick={e => this._selectedSub(e, ".cate03")}>일</div>
                        <div className="cate03 sub" onClick={e => this._selectedSub(e, ".cate03")}>전체</div>
                    </div>
                    <div className="select">
                        <div className="cate04 sub fick" onClick={e => this._selectedSub(e, ".cate04")}>모집</div>
                        <div className="cate04 sub" onClick={e => this._selectedSub(e, ".cate04")}>마감</div>
                        <div className="cate04 sub" onClick={e => this._selectedSub(e, ".cate04")}>전체</div>
                    </div>
                </div>
                <div style={{padding:"15px 20px", clear:"both"}}>
                    <div style={{display:"flow-root"}}>
                        {this.data.teams.map( (team) => {
                            num = num +1
                            return (
                                <div className="product_item" key={team.id}>
                                    <Link href={{ pathname: '/teach', query: { id: `${team.id}` } }} as={`/teach/${team.id}`}>
                                        <div style={{display:"flex"}}>
                                            <div className="thumb_wrap">
                                                <div style={{backgroundImage:`url(../static/team_test0${num}.png)`}} className="thumb_img"></div>
                                                <div className="tag">{team.category}</div>
                                            </div>
                                            <div className="info_wrap">
                                                <div className="title_wrap">
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
                    <StripBanner innerText="풋볼러에 트레이닝을 등록해보세요." innerUrl="https://forms.gle/F2R3Jk4qLM83MnD47"/>
                    <div style={{display:"flow-root"}}>
                        {this.data.teams.map( (team) => {
                            num_ = num_ +1
                            return (
                                <div className="product_item" key={team.id}>
                                    <Link href={{ pathname: '/teach', query: { id: `${team.id}` } }} as={`/teach/${team.id}`}>
                                        <div style={{display:"flex"}}>
                                            <div className="thumb_wrap">
                                                <div style={{backgroundImage:`url(../static/team_test0${num_}.png)`}} className="thumb_img"></div>
                                                <div className="tag">{team.category}</div>
                                            </div>
                                            <div className="info_wrap">
                                                <div className="title_wrap">
                                                    <p className="title">{team.club_name}</p>
                                                    <button className="btn_state gray">마감</button>
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
                        .search_wrap {
                            // background-color: #f2f2f2;
                            border-top: 1px solid #efefef;
                            border-bottom: 1px solid #efefef;
                            display: flex;
                            -webkit-box-pack: justify;
                            justify-content: space-between;
                            padding: 0px 20px;
                        }

                        .selected_btn {
                            width: 22px;
                            height: 50px;
                        }
                        .search_wrap .btn_close {
                            background: transparent url('/static/icon/icon_display_close.png');
                            background-position:center;
                            background-repeat:no-repeat;
                            background-size: 16px;
                        }
                        .search_wrap .btn_open {
                            background: transparent url('/static/icon/icon_display_open.png');
                            background-position:center;
                            background-repeat:no-repeat;
                            background-size: 16px;
                        }

                        .selected_wrap {
                            display: flex;
                            height: 50px;
                            // border-top: 1px solid #efefef;
                            // border-bottom: 1px solid #efefef;
                            line-height: 50px;
                        }

                        .selected {
                            font-size: 14px;
                            font-weight: bold;
                            line-height: 50px;
                            margin-right: 15px;
                        }

                        .select_wrap {
                            background-color: #333333;
                            color: #fff;
                            font-size: 13px;
                            padding-bottom: 10px;
                        }

                        .select {
                            display: flex;
                            padding-top: 15px;
                            margin: 0px 20px;
                            border-bottom: 1px solid #444444;
                        }

                        .select .sub {
                            margin-right: 15px;
                            padding-bottom: 2px;
                        }

                        .select .fick {
                            padding-bottom: 10px;
                            border-bottom: 2px solid #fff;
                        }



                        
                        p {
                            margin: 0px;
                        }

                        .product_item {
                            // border-top: 1px solid #eff3f6;
                            padding-top: 15px;
                            padding-bottom: 15px;
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
                            width: 97px;
                            height: 97px;
                        }

                        .info_wrap {
                            position: relative;
                            flex-shrink: 1;
                        }

                        .title_wrap { display: flex; }
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