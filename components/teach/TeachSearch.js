import React, { Component, useState } from 'react';
import Link from 'next/link';

import db from '../../common/db';
import { observable } from 'mobx';
import { observer } from "mobx-react";

class Data {
    @observable teams = [];
}

const Search = () => {
    const [cateKey, setCateKey] = useState(0)
    const [subKey, setSubKey] = useState(100)
    const [resetKey, setResetKey] = useState("false")
    const [value, setValue] = useState("none")
    const [checked, setChecked] = useState("true")

    const displayChage = (e, index) => {
        if (value == "none") setValue("block")
        else setValue("none")
    
        const data = Array.from(document.querySelectorAll('.btn_cate'))
        data.map( arr => {
            arr.classList.remove('checked')    
        })
        
        if (cateKey == index) {
            if (value == 'none') e.currentTarget.classList.add('checked')
        } else {
            e.currentTarget.classList.add('checked')
            setValue("block")
        }
        setCateKey(index)
        setResetKey("true")
    }

    const ariaChecked = (e, index) => {
        const data = Array.from(document.querySelectorAll('.btn_filter'))
        data.map( arr => {
            arr.classList.remove('test')    
        })

        e.currentTarget.classList.add('test')
        setSubKey(index)
        setResetKey("true")
    }

    const filterInit = e => {
        setValue("none")
        setResetKey("false")
        const data_cate = Array.from(document.querySelectorAll('.btn_cate'))
        data_cate.map((arr, index) => {
            index != 0 ? arr.classList.remove('checked') :  arr.classList.add('checked')
        })

        const data_filter = Array.from(document.querySelectorAll('.btn_filter'))
        data_filter.map((arr, index) => {
            index != 0 ? arr.classList.remove('test') :  arr.classList.add('test')
        })
    }

    const arr = ["ALL", "축구", "풋살"]
    const arr_ = ["ALL","서울", "경기", "인천", "부산"]
    const arr__ = ["ALL", "주말", "평일", "월", "화", "수", "목", "금"]

    return (
        <div className="search_wrap">
            <div className="select_wrap">
                <input type="button" className="btn_reset" reset-checked={resetKey} onClick={filterInit} value="reset" />
                <input type="button" className="btn_cate checked" onClick={e => displayChage(e, 1)} value="ALL" />
                <input type="button" className="btn_cate" onClick={e => displayChage(e, 2)} value="지역" />
                <input type="button" className="btn_cate" onClick={e => displayChage(e, 3)} value="요일" />
            </div>
            <div className="select_btn" style={{display: value}}>
                {
                    cateKey == 1 ? (
                        arr.map((arr, index) => {
                            return (
                                <input type="button" className={`btn_filter ${index == 0 ? 'test' : ''}`} onClick={e => ariaChecked(e, index)} key={index} value={arr} />
                            )
                        })
                        
                    ) : (
                        cateKey == 2 ? (
                            arr_.map((arr, index) => {
                                return (
                                    <input type="button" className={`btn_filter ${index == 0 ? 'test' : ''}`} onClick={e => ariaChecked(e, index)} key={index} value={arr} />
                                )
                            })
                            
                        ) : (
                            arr__.map((arr, index) => {
                                return (
                                    <input type="button" className={`btn_filter ${index == 0 ? 'test' : ''}`} onClick={e => ariaChecked(e, index)} key={index} value={arr} />
                                )
                            })
                        )
                    )
                }
            </div>

            <style jsx>
                {`
                    .search_wrap {
                        margin-top: 20px;
                        margin-bottom: 5px;
                    }

                    .select_wrap {
                        padding: 0px 20px;
                        height: 60px;
                        border-top: 1px solid #efefef;
                        border-bottom: 1px solid #efefef;
                        line-height: 58px;
                        background-color: #f4f7f8;
                    }

                    .select_btn {
                        padding: 10px 20px;
                        background-color: #f2f2f2;
                    }

                    .btn_reset {
                        background-color: #fff;
                        border: solid 1px #adb5bd;
                        border-radius: 2px;
                        color: #6c757d;
                        margin-right: 10px;
                        padding: 0 11px;
                        border-radius: 6px;
                        font-size: 14px;
                        display: inline-block;
                        line-height: 32px;
                    }

                    .btn_reset[reset-checked="true"] {
                        color: #4383EF;
                        border: solid 1px #4383EF;
                        background-color: #fff;
                    }

                    .btn_cate {
                        background-color: #fff;
                        border: solid 1px #adb5bd;
                        border-radius: 2px;
                        color: #6c757d;
                        margin-right: 10px;
                        padding: 0 11px;
                        border-radius: 6px;
                        font-size: 14px;
                        display: inline-block;
                        line-height: 32px;
                    }

                    .checked {
                        color: #4383EF;
                        border: solid 1px #4383EF;
                        background-color: #fff;
                    }
                    
                    .btn_filter {
                        margin-bottom: 10px;
                        margin-right: 10px;
                        background-color: #fff;
                        padding: 0 11px;
                        border-radius: 6px;
                        font-size: 14px;
                        color: #444;
                        border: 0px;
                        display: inline-block;
                        line-height: 28px;
                        box-shadow: 0 2px 8px 0 rgba(37, 50, 67, 0.18), 0 1px 1px 0 rgba(37, 50, 67, 0.03);
                    }

                    .test {
                        color: #fff;
                        background-color: #4383EF;
                    }

                `}
            </style>
        </div>
    )
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
                <Search />
                {/* <div className="search_wrap">
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
                        <select className="select_cate01" style={{width:"22%"}}>
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
                </div> */}
                <div style={{padding:"15px 20px", clear:"both"}}>
                    <div style={{display:"flow-root"}}>
                        {this.data.teams.map( (team) => {
                            num = num +1
                            return (
                                <div className="product_item" key={team.id}>
                                    <Link as={`/teams/${team.id}`} href={`/teams?teamId=${team.id}`}>
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
                            border-top: 1px solid #efefef;
                            border-bottom: 1px solid #efefef;
                            line-height: 58px;
                            background-color: #f4f7f8;
                        }

                        .select_btn {
                            padding: 0px 20px;
                            background-color: #f2f2f2;
                        }

                        .btn_search {
                            margin-right: 10px;
                            background-color: #fff;
                            padding: 0 11px;
                            border-radius: 6px;
                            font-size: 14px;
                            color: #444;
                            border: 0px;
                            display: inline-block;
                            line-height: 32px;
                            box-shadow: 0 2px 8px 0 rgba(37, 50, 67, 0.18), 0 1px 1px 0 rgba(37, 50, 67, 0.03);
                        }
                       
                        .btn_search[aria-checked="true"] {
                            color: #fff;
                            background-color: #444;
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
                            width: 100px;
                            height: 100px;
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