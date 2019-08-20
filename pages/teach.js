import React, { Component } from 'react';
import Layout from '../components/layout/Layout';
import TeachDetail from '../components/teach/TeachDetail';

export default class extends Component {
    static getInitialProps ({ query: { id } }) {
        return { teamID: id }
    }
  
    render () {
        return (
            <Layout>
                <TeachDetail teamID={this.props.teamID}/>
            </Layout>
        )
    }
}