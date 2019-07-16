import React, { Component } from 'react';
import Layout from '../components/layout/Layout';
import MyTeam from '../components/user/MyTeam';

class MyTeams extends Component {

    static async getInitialProps({query}) {
        const props = {
            teamID : query.teamId
        }
        
        return props;
    }

    render() {
        return (
            <Layout>
                <MyTeam teamID={this.props.teamID}/>
            </Layout>
        )
    }
}
export default MyTeams;