import Link from 'next/link';
import React, { Component } from 'react';
import {Container, Row, Col } from 'react-bootstrap';


class Footer extends Component {

    render() {
        return (
            <footer style={{fontWeight:"lighter", fontSize:"12px", padding:"30px 20px", backgroundColor: "rgb(250, 250, 250)"}}>
                <div>
                    <div style={{paddingBottom:"5px"}}>
                        <div className="footer_link" style={{float:"left"}}>
                            <Link href="/company"><span>풋볼러소개</span></Link>
                        </div>
                        <div className="footer_link" style={{float:"left"}}>
                            <Link href="/agreement"><span>이용약관</span></Link>
                        </div>
                        <div style={{float:"left"}}>
                            <Link href="/privacy"><span>개인정보처리방침</span></Link>
                        </div>
                        <div style={{float:"right"}}>
                            <a href="https://www.instagram.com/footballer.korea/" target="_blank">
                                <img src="/static/icon/icon_insta.png" style={{width:"17px"}}/>
                            </a>
                        </div>
                    </div>
                    <div style={{clear:"both", paddingTop:"10px"}}><small>© 2019 FOOTBALLER, All rights reserved.</small></div>
                </div>
                <style jsx>
                    {`
                        .footer_link:after {
                            display: inline-block;
                            content: '';
                            position: relative;
                            width: 1px;
                            height: 7px;
                            margin: 0 10px;
                            background-color: #d7d7d7;
                        }
                    `}
                </style>
            </footer>
        )
    }
}

export default Footer;