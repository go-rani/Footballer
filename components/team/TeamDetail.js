import Link from 'next/link';
import React, { Component } from 'react';
import { Card, Button, Alert, Form } from 'react-bootstrap';


class TeamDetail extends Component {
        
    constructor(props) {
        super(props)
    }

    render() {
        
        return (
            <div>
                팀 상세페이지
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
export default TeamDetail;
