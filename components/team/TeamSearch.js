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
class TeamSearch extends Component {
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
            default:
                return null;
        }
    }

    render() {
        let num = 0
        let num_ = 0
        return (
            <div>
                <div className="search_wrap"  onClick={this._selectDisplay}>
                    <div className="selected_wrap">
                        <div ref="cate01" className="selected">혼성</div>
                        <div ref="cate03" className="selected">ALL</div>
                        <div ref="cate02" className="selected">Wherever</div>
                    </div>
                    <div className={`selected_btn ${this.state.select_show == "none" ? 'btn_close' : 'btn_open'}`}></div>
                </div>
                <div className="select_wrap" style={{display:`${ this.state.select_show }`}}>
                    <div className="select">
                        <div className="cate01 sub fick" onClick={e => this._selectedSub(e, ".cate01")}>혼성</div>
                        <div className="cate01 sub" onClick={e => this._selectedSub(e, ".cate01")}>남성</div>
                        <div className="cate01 sub" onClick={e => this._selectedSub(e, ".cate01")}>여성</div>
                    </div>
                    <div className="select">
                        <div className="cate03 sub fick" onClick={e => this._selectedSub(e, ".cate03")}>ALL</div>
                        <div className="cate03 sub" onClick={e => this._selectedSub(e, ".cate03")}>축구</div>
                        <div className="cate03 sub" onClick={e => this._selectedSub(e, ".cate03")}>풋살</div>
                    </div>
                    <div className="select">
                        <div className="cate02 sub fick" onClick={e => this._selectedSub(e, ".cate02")}>Wherever</div>
                        <div className="cate02 sub" onClick={e => this._selectedSub(e, ".cate02")}>서울</div>
                        <div className="cate02 sub" onClick={e => this._selectedSub(e, ".cate02")}>인천</div>
                        <div className="cate02 sub" onClick={e => this._selectedSub(e, ".cate02")}>경기</div>
                        <div className="cate02 sub" onClick={e => this._selectedSub(e, ".cate02")}>부산</div>
                    </div>
                </div>
                <div style={{display:"flow-root", paddingTop:"10px", marginTop:"20px", marginLeft:"20px", marginRight:"20px"}}>
                    {this.data.teams.map( (team) => {
                        num = num +1
                        return (
                            <div className="card_div" style={num%2 == 1 ? {paddingRight:"10px"} : {paddingLeft: "10px"}} key={team.id}>
                                {/* <Link route={`/teams/${team.id}`}> */}
                                <Link as={`/teams/${team.id}`} href={`/teams?teamId=${team.id}`}>
                                    <div style={{ width:"100%", position:"relative"}}>
                                        <div style={{backgroundImage:`url(../static/team_test0${num}.png)`, width:"100%", paddingBottom: "75%", backgroundSize:"cover"}}></div>
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
                </div>
                <div style={{display:"flow-root", marginLeft:"20px", marginRight:"20px", paddingBottom:"20px"}}>
                    {this.data.teams.map( (team) => {
                        num_ = num_ +1
                        return (
                            <div className="card_div" style={num_%2 == 1 ? {paddingRight:"10px"} : {paddingLeft: "10px"}} key={team.id}>
                                {/* <Link route={`/teams/${team.id}`}> */}
                                <Link as={`/teams/${team.id}`} href={`/teams?teamId=${team.id}`}>
                                    <div style={{ width:"100%", position:"relative"}}>
                                        <div style={{backgroundImage:`url(../static/team_test0${num_}.png)`, width:"100%", paddingBottom: "75%", backgroundSize:"cover"}}></div>
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
                </div>
                {/* <StripBanner innerText="풋볼러에 팀을 등록해보세요." innerUrl="https://forms.gle/F2R3Jk4qLM83MnD47"/> */}
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
export default TeamSearch;