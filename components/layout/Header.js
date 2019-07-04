import Link from 'next/link'
import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <div style={{width:"100%"}}>
                <Navbar sticky="top" className="container">
                    <img src="" style={{width:"40px",marginRight:"8px"}}/>
                    <Link href="/">
                        <a className="navbar-brand font-weight-bold mr-0">FOOTBALLER</a>
                    </Link>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Link href="/schedule"><a className="ml-3 text-decoration-none text-reset">스케줄</a></Link>
                        <Link href="/"><a className="ml-3 text-decoration-none text-reset">사업분야</a></Link>
                        <Link href="/"><a className="ml-3 text-decoration-none text-reset">시공실적</a></Link>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Header;