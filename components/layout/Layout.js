import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

class Layout extends Component {
    
    render() {
        return (
            <div style={{backgroundColor:"#fff"}}>
                <Header/>
                <div style={{padding:"20px 20px"}}>{this.props.children}</div>
                <Footer/>
            </div>
        )
    }
}

export default Layout;