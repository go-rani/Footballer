import React, { Component } from 'react';
import Layout from '../components/layout/Layout';
import TeachDetail from '../components/teach/TeachDetail';

class Teach extends Component {

    static async getInitialProps({query}) {
        const props = {
            teamID : query.teamId
        }
        
        return props;
    }

    render() {
        return (
            <Layout>
                <TeachDetail teamID={this.props.teamID}/>
            </Layout>
        )
    }
}
export default Teach;