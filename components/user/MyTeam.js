import Link from 'next/link';
import React, { Component } from 'react';
import { Card, Button, Alert, Form } from 'react-bootstrap';


class MyTeam extends Component {
        
    constructor(props) {
        super(props)
        this.state = {
            show: true,
        }
    }

    render() {
        const handleDismiss = () => this.setState({ show: false });
        return (
            <div>
                <Alert show={this.state.show} variant="primary" onClose={handleDismiss} dismissible>
                    <Alert.Heading>7월 회비 납부</Alert.Heading>
                    <strong>신한</strong> 110-256-444444
                    <Button variant="light" size="sm">
                        복사
                    </Button>
                </Alert>

                <div style={{padding:"20px 0px"}}>
                    <h5>경기일정</h5>
                    <Card>
                        <Card.Header>7/31 (수) PM 8:00 ~ 10:00</Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                                <div>
                                    <strong>경기장: </strong> 잠실 올팍축구장
                                    <Button variant="secondary" size="sm">주소 복사</Button>
                                </div>
                                <div>
                                    <p>description</p>
                                </div>
                                <footer className="blockquote-footer">                                
                                    투표
                                    <Form>
                                        <div style={{width:"50%", float:"left"}}>
                                            <Form.Check inline label="참석" type="radio" name="formRadios" id="formRadios1"/> 10명
                                        </div>
                                        <div style={{width:"50%", float:"left"}}>
                                            <Form.Check inline label="불참" type="radio" name="formRadios" id="formRadios2"/> 1명
                                        </div>
                                    </Form>
                                </footer>
                            </blockquote>
                        </Card.Body>
                    </Card>
                </div>
                
                <div style={{padding:"20px 0px"}}>
                    <h5>팀정보</h5>
                    <div className="bd-callout">
                        <h5>FC치키토</h5>
                        <Link href="/team/[id]" as={`/team/56b65efc-f0aa-4d47-94f0-3e957d418753`}>
                            <Button variant="light" style={{width: "100%"}}>
                                상세페이지
                            </Button>
                        </Link>
                    </div>
                </div>
                <style jsx>
                    {`
                        .bd-callout {
                            padding: 1.25rem;
                            margin-top: 1.25rem;
                            margin-bottom: 1.25rem;
                            border: 1px solid #eee;
                            border-left-width: .25rem;
                            border-radius: .25rem;
                            border-left-color: #f0ad4e;
                        }
                    `}
                </style>
            </div>
        )
    }

}
export default MyTeam;
