import React, { Component } from 'react';
import Layout from '../components/layout/Layout';
import TeamDetail from '../components/team/TeamDetail';

export default class extends Component {
    static getInitialProps ({ query: { id } }) {
        return { teamID: id }
    }
  
    render () {
        return (
            <Layout>
                <TeamDetail teamID={this.props.teamID}/>
            </Layout>
        )
    }
}