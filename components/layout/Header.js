import Link from 'next/link'
import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <div style={{width:"100%", padding:"0 20px"}}>
                <Navbar sticky="top" className="container" style={{paddingLeft:"0px", paddingRight:"0px"}}>
                    {/* <img src="" style={{width:"40px",marginRight:"8px"}}/> */}
                    <Link href="/">
                        <a className="navbar-brand font-weight-bold mr-0">FOOTBALLER</a>
                    </Link>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Link href="/search"><a className="ml-3 text-decoration-none text-reset">팀찾기</a></Link>
                        <Link href="/"><a className="ml-3 text-decoration-none text-reset"></a></Link>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Header;