import Link from 'next/link';
import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

import Login from '../user/Login';

class Header extends Component {
    render() {
        return (
            <div style={{width:"100%", padding:"0 20px"}}>
                <Navbar sticky="top" className="container" style={{padding:"15px 0px"}}>
                    {/* <img src="" style={{width:"40px",marginRight:"8px"}}/> */}
                    <Link href="/">
                        <img src="/static/logo.png" style={{width:"100px"}} />
                        {/* <a className="navbar-brand font-weight-bold mr-0" style={{letterSpacing:"-1px"}}>FOOTBALLER</a> */}
                    </Link>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Link href="/teachList"><a className="mr-3 text-decoration-none text-reset" style={{fontSize:"14px"}}>트레이닝</a></Link>
                        <Link href="/teamList"><a className="mr-3 text-decoration-none text-reset" style={{fontSize:"14px"}}>팀찾기</a></Link>
                        {/* <Link href="/search?keyword=something"><a className="ml-3 text-decoration-none text-reset">팀찾기</a></Link> */}
                        <Login />
                        {/* <Link href="/"><a className="ml-3 text-decoration-none text-reset"></a></Link> */}
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Header;