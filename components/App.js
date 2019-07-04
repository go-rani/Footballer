import React, { Component } from 'react';
import db from '../common/db';
import { observer } from "mobx-react";
import { observable } from 'mobx';

class Data {
    @observable teams = [];
}

@observer
class App extends Component {
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
                데이타
                {this.props.date}
                {this.data.teams.map( team => 
                    <div key={team.id}>{team.club_name}</div>
                )}
            </div>
        )
    }

}
export default App;
