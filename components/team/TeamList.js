import Link from 'next/link';
import React, { Component } from 'react';
import db from '../../common/db';
import { observable } from 'mobx';
import { observer } from "mobx-react";
import { Button } from 'react-bootstrap';

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
                    <Link href="/team">
                        <Button key={team.id} variant="outline-secondary">{team.club_name}</Button>
                    </Link>
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