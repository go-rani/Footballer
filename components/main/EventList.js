import React, { Component } from 'react';
import db from '../../common/db';
import uuid from 'uuid/v4';


class EventList extends Component {
    constructor(props, context) {
        super(props, context)

    }


    _subscribe = () => {
        const now = new Date()
        const inputValue = this.input.value
        const uid = uuid()
        const email = { //TODO::email 수집 시 analytics 정보 쓸 수 있는지 확인 필요.
            email : inputValue,
            date : now,
        }
        
        db.collection('email_subscribe')
            .doc(uid)
            .set(email)
            .then(res => {
                this.input.value = ""
            })
            .catch(error => {
                alert(error.message)
                console.log(error)
            })

        this._handleClose()
    }

    render() {
        return (
            <div>
                <div className="subscribe_wrap">
                    <div className="text_wrap">
                        <p>축구/풋살을 더 즐기기 위한 이야기,</p>
                        <p><span>FOOTBALLER</span>를 구독해보세요.</p>
                    </div>
                    <div className="email_wrap">
                        <div className="input_area">
                            <input type="text" placeholder="이메일 주소 입력"/>
                        </div>
                        <a className="email_send">구독</a>
                    </div>
                </div>
                <style jsx>
                    {`
                        p {
                            margin: 0px;
                            padding: 0px;
                            font-size: 12px;
                        }

                        span {
                            font-size: 13px;
                            font-weight: bold;
                            padding-right: 3px;
                        }

                        .subscribe_wrap {
                            border: 1px solid #eee;
                            padding: 30px 20px;
                            background: #fff;
                        }

                        .email_wrap {
                            position: relative;
                            width: 100%;
                            height: 40px;
                            border: none;
                            border-radius: 0;
                            margin: 15px auto 0;
                            background: #f3f3f3;
                            box-sizing: border-box;
                            padding-left: 17px;
                        }

                        .input_area {
                            width: 100%;
                            height: 100%;
                        }

                        .email_wrap input {
                            width: 100%;
                            height: 100%;
                            background: #f3f3f3;
                            font-size: 11px;
                            line-height: 36px;
                            outline: none;
                            border-radius: 0;
                            box-shadow: none;
                            text-align: left;
                            border: 0;
                        }

                        input[type="text"]:focus, input[type="password"]:focus,
                        textarea:focus, select:focus {
                            font-size: 16px;
                        }

                        .email_send {
                            width: 60px;
                            height: 100%;
                            background: #e8e8e8;
                            border-radius: 0;
                            font-weight: 600;
                            font-size: 12px;
                            line-height: 40px;
                            position: absolute;
                            right: 0px;
                            top: 0;
                            text-align: center;
                        }
                    `}
                </style>
            </div>
        )
    }
}

export default EventList;