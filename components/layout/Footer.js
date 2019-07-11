import Link from 'next/link';
import React, { Component } from 'react';
import {Container, Row, Col } from 'react-bootstrap';


class Footer extends Component {

    render() {
        return (
            <footer style={{fontWeight:"lighter", fontSize:"14px", padding:"30px 20px", backgroundColor: "rgb(250, 250, 250)"}}>
                <div>
                    <div style={{paddingBottom:"5px"}}>
                        <div style={{float:"left", paddingRight:"10px"}}>
                            <Link href="/company"><span>회사소개</span></Link>
                        </div>
                        <div style={{float:"left", paddingRight:"10px"}}>
                            <Link href="/agreement"><span>이용약관</span></Link>
                        </div>
                        <div style={{float:"left", paddingRight:"10px"}}>
                            <Link href="/privacy"><span>개인정보처리방침</span></Link>
                        </div>
                        <div style={{float:"right"}}>
                            <a href="https://www.instagram.com/footballer.korea/" target="_blank"><small>인스타</small></a>
                        </div>
                    </div>
                    <div style={{clear:"both"}}><small>© 2019 FOOTBALLER, All rights reserved.</small></div>
                </div>
            </footer>
        )
    }
}

export default Footer;