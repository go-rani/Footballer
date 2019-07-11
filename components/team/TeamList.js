import Link from 'next/link';
import React, { Component } from 'react';
import db from '../../common/db';
import { observable } from 'mobx';
import { observer } from "mobx-react";
import { Card, Image, Row, Col } from 'react-bootstrap';

class Data {
    @observable teams = [];
}

@observer
class TeamList extends Component {
    data = new Data()

    constructor(props) {
        super(props)
        db.collection('teams')
            .get()
            .then(res => {
                const newTeams = []
                res.forEach(doc => {
                    const docData = doc.data()
                    docData.id = doc.id
                    newTeams.push(docData)
                })
                this.data.teams = newTeams
                console.log(newTeams)
            })
            .catch(error => {
                alert(error.message)
                console.log(error)
            })
    }

    render() {
        
        return (
            <div>
                {this.data.teams.map( team => 
                    <div style={{width:"50%", float:"left", paddingRight:"10px", paddingBottom:"10px"}} key={team.id}>
                        <Link href="/team/[id]" as={`/team/${team.id}`}>
                            <Card style={{ width:"100%" }}>
                                <Card.Img variant="top" src="https://placehold.it/100x100" />
                                <Image style={{position:"absolute", width:"40px", height:"20px", right:"5%", top:"4%", backgroundColor:"#333"}} />
                                <Card.Body>
                                    <Card.Title>{team.club_name}</Card.Title>
                                    <p><small>서울>잠실</small></p>
                                    <p><small>여성</small></p>
                                </Card.Body>
                            </Card>
                        </Link>
                    </div>
                )}
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
export default TeamList;