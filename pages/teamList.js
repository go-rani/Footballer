import Layout from '../components/layout/Layout';
import TeamSearch from '../components/team/TeamSearch';

import React, { Component } from 'react';
import db from '../common/db';

class TeamList extends Component {

    static async getInitialProps() {

        const result = await db.collection('teams').get()
        const newTeams = []
        result.forEach(doc => {
            const docData = doc.data()
            docData.id = doc.id
            newTeams.push(docData)
        })
        
        return {
            teams: newTeams
        }

    }

    render() {
        return (
            <Layout>
                <TeamSearch teamsData={this.props.teams}/>
            </Layout>
        )
    }
}
export default TeamList;