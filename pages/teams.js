import React, { Component } from 'react';
import Layout from '../components/layout/Layout';
import TeamDetail from '../components/team/TeamDetail';

class Teams extends Component {

    static async getInitialProps({query}) {
        const props = {
            teamID : query.teamId
        }
        
        return props;
    }

    render() {
        return (
            <Layout>
                <TeamDetail teamID={this.props.teamID}/>
            </Layout>
        )
    }
}
export default Teams;