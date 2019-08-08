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
        return (
            <div>
                <div className="search_wrap">
                    <div className="selected_wrap">
                        <div ref="cate01" className="selected">All</div>
                        <div ref="cate02" className="selected">Wherever</div>
                        <div ref="cate03" className="selected">Whenever</div>
                    </div>
                    <div className="selected" style={{margin:"0px"}} onClick={this._selectDisplay}>^</div>
                </div>
                <div className="select_wrap" style={{display:`${ this.state.select_show }`}}>
                    <div className="select">
                        <div className="cate01 sub fick" onClick={e => this._selectedSub(e, ".cate01")}>ALL</div>
                        <div className="cate01 sub" onClick={e => this._selectedSub(e, ".cate01")}>축구</div>
                        <div className="cate01 sub" onClick={e => this._selectedSub(e, ".cate01")}>풋살</div>
                    </div>
                    <div className="select">
                        <div className="cate02 sub fick" onClick={e => this._selectedSub(e, ".cate02")}>Wherever</div>
                        <div className="cate02 sub" onClick={e => this._selectedSub(e, ".cate02")}>서울</div>
                        <div className="cate02 sub" onClick={e => this._selectedSub(e, ".cate02")}>인천</div>
                        <div className="cate02 sub" onClick={e => this._selectedSub(e, ".cate02")}>경기</div>
                        <div className="cate02 sub" onClick={e => this._selectedSub(e, ".cate02")}>부산</div>
                    </div>
                    <div className="select">
                        <div className="cate03 sub fick" onClick={e => this._selectedSub(e, ".cate03")}>Whenever</div>
                        <div className="cate03 sub" onClick={e => this._selectedSub(e, ".cate03")}>평일</div>
                        <div className="cate03 sub" onClick={e => this._selectedSub(e, ".cate03")}>주말</div>
                        <div className="cate03 sub" onClick={e => this._selectedSub(e, ".cate03")}>토</div>
                        <div className="cate03 sub" onClick={e => this._selectedSub(e, ".cate03")}>일</div>
                    </div>
                </div>
                <div style={{padding:"15px 20px", clear:"both"}}>
                    <div style={{display:"flow-root"}}>
                        {this.data.teams.map( (team) => {
                            num = num +1
                            return (
                                <div className="product_item" key={team.id}>
                                    <Link as={`/teach/${team.id}`} href={`/teach?teamId=${team.id}`}>
                                        <div style={{display:"flex"}}>
                                            <div className="thumb_wrap">
                                                <div style={{backgroundImage:`url(../static/team_test0${num}.png)`}} className="thumb_img"></div>
                                            </div>
                                            <div className="info_wrap">
                                                <p className="title">{team.club_name}</p>
                                                <p className="content"><small>{team.location} </small></p>
                                                <p className="content"><small>{team.location} </small></p>
                                                <div className="tag">{team.category}</div>
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
                            background-color: #f2f2f2;
                            display: flex;
                            -webkit-box-pack: justify;
                            justify-content: space-between;
                            padding: 0px 20px;
                        }

                        .selected_wrap {
                            display: flex;
                            height: 50px;
                            border-top: 1px solid #efefef;
                            border-bottom: 1px solid #efefef;
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
                            padding-bottom: 5px;
                        }

                        .select {
                            display: flex;
                            padding-top: 17px;
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
                            border-top: 1px solid #eff3f6;
                            padding-top: 15px;
                            padding-bottom: 15px;
                        }

                        .tag {
                            border-radius: 3px;
                            background: rgba(0,0,0,.2);
                            color: #fff;
                            width: 50px;
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
                            width: 97px;
                            height: 97px;
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