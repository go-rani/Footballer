import React, { Component } from 'react';
import ReactGA from 'react-ga';
import Header from './Header';
import Footer from './Footer';

import userDB from '../../common/store/user';
import { observer } from 'mobx-react';

@observer
class Layout extends Component {
    constructor(props) {
        super(props)
        
        const user = props.user && props ? props.user : null
        if (user) userDB.info.uid = user.uid
    }
    
    componentDidMount() {
        ReactGA.initialize('UA-1234567-1')
        ReactGA.pageview(document.location.pathname)
    }

    render() {
        return (
            <div style={{backgroundColor:"#fff"}}>
                <Header/>
                    {this.props.children}
                    {/* <div style={{padding:"20px 20px"}}>{this.props.children}</div> */}
                <Footer/>
            </div>
        )
    }
}

export default Layout;