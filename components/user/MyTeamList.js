import Link from 'next/link';
import React, { Component } from 'react';
import { Image } from 'react-bootstrap';


class MyTeamList extends Component {
        
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h5>MY TEAM</h5>

                <Link href="/myteam">
                    <div>
                        <div style={{float:"left", marginRight:"15px"}}>
                            <Image src="https://placehold.it/80x80" roundedCircle />
                        </div>
                        <div style={{overflow:"hidden", height:"80px", paddingTop:"12px"}}>
                            <div style={{float:"left"}}>
                                <h5>FC 치키토</h5>
                                <div>
                                    <span style={{paddingRight:"8px", color:"#777777"}}><small>#풋살</small></span>
                                    <span style={{paddingRight:"8px", color:"#777777"}}><small>#서울</small></span>
                                    <span style={{color:"#777777"}}><small>#매주수요일20시</small></span>
                                </div>
                            </div>
                            <div style={{width:"20px", float:"right", paddingTop:"12px"}}>
                                ▶
                            </div>
                        </div>
                    </div>
                </Link>
                <Link href="/myteam">
                    <div style={{paddingTop:"15px"}}>
                        <div style={{float:"left", marginRight:"15px"}}>
                            <Image src="https://placehold.it/80x80" roundedCircle />
                        </div>
                        <div style={{overflow:"hidden", height:"80px", paddingTop:"12px"}}>
                            <div style={{float:"left"}}>
                                <h5>금곡 FC</h5>
                                <div>
                                    <span style={{paddingRight:"8px", color:"#777777"}}><small>#축구</small></span>
                                    <span style={{paddingRight:"8px", color:"#777777"}}><small>#성남</small></span>
                                    <span style={{color:"#777777"}}><small>#매주토요일9시</small></span>
                                </div>
                            </div>
                            <div style={{width:"20px", float:"right", paddingTop:"12px"}}>
                                ▶
                            </div>
                        </div>
                    </div>
                </Link>
            
            </div>
        )
    }

}
export default MyTeamList;
