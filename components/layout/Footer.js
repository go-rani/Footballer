import Link from 'next/link';
import React, { Component } from 'react';
import {Container, Row, Col } from 'react-bootstrap';


class Footer extends Component {

    render() {
        return (
            <footer style={{fontWeight:"lighter", fontSize:"14px", padding:"30px 20px", backgroundColor: "rgb(250, 250, 250)"}}>
                <div>
                    <div style={{paddingBottom:"5px"}}>
                        <div style={{ float:"left", paddingRight:"10px"}}>
                            <Link href="/agreement"><span>이용약관</span></Link>
                        </div>
                        <div>
                            <Link href="/privacy"><span>개인정보처리방침</span></Link>
                        </div>
                    </div>
                    <div><small>© 2019 FOOTBALLER, All rights reserved.</small></div>
                </div>
                {/* <footer style={{background:"#222222", color:"#fff", fontWeight:"lighter", fontSize:"14px", padding:"0 20px"}}> */}
                {/* <Container>
                    <Row className="pt-3">
                        <Col md={8}>
                            <div className="pb-3">
                                <span style={{color:"#0087d5", fontWeight:"bold"}}>TEL. </span>
                                <span>031-1234-1234</span>
                                <span style={{color:"#0087d5", marginLeft:"10px", fontWeight:"bold"}}>FAX. </span>
                                <span>031-1234-1234</span>
                            </div>
                            <div className="pb-3">
                                <span style={{color:"#0087d5", fontWeight:"bold"}}>주소. </span>
                                <span>상세, </span>
                                <span style={{wordBreak: "keep-all"}}>주소</span>
                            </div>
                        </Col>
                        <Col md={4}>
                            <p className="float-right" style={{fontSize:"15px"}}>
                                © Since 2019, (주), All rights reserved.
                            </p>
                        </Col>
                    </Row>
                </Container> */}
            </footer>
        )
    }
}

export default Footer;