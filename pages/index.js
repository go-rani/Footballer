import Layout from '../components/layout/Layout';
import MainContents from '../components/main/MainContents';

import React, { Component } from 'react';
import db from '../common/db';

export default class Index extends Component {

    static async getInitialProps({ req, query }) {
        const userSession = req && req.session ? req.session.decodedToken : null

        const result = await db.collection('teams').orderBy('date').limit(4).get()
        const newTeams = []
        result.forEach(doc => {
            const docData = doc.data()
            docData.id = doc.id
            newTeams.push(docData)
        })
        
        return {
            teams: newTeams,
            user : userSession
        }
    }

    render() {
        return (
            // <div>aa</div>
            <Layout user={this.props.user}>
                <MainContents teamsData={this.props.teams}/>
            </Layout>
        )
    }
}
