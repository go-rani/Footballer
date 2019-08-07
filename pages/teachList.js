import Layout from '../components/layout/Layout';
import TeachSearch from '../components/teach/TeachSearch_copy';

import React, { Component } from 'react';
import db from '../common/db';

class TeachList extends Component {

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
                <TeachSearch teamsData={this.props.teams}/>
            </Layout>
        )
    }
}
export default TeachList;