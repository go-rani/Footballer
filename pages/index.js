import Layout from '../components/layout/Layout';
import MainContents from '../components/main/MainContents';

import React, { Component } from 'react';
import db from '../common/db';

class Index extends Component {

    static async getInitialProps() {

        const result = await db.collection('teams').orderBy('date').limit(4).get()
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
                <MainContents teamsData={this.props.teams}/>
            </Layout>
        )
    }
}
export default Index;