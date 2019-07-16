import React, { Component } from 'react';
// import Link from 'next/link';
import { Link } from '../../routes';
import db from '../../common/db';
import { observable } from 'mobx';
import { observer } from "mobx-react";
import user from '../../common/store/user';

import { Image } from 'react-bootstrap';

class Data {
    @observable myteams = [];
}

@observer
class MyTeamList extends Component {
    data = new Data()
        
    constructor(props) {
        super(props)
        
        if (user.info.uid) {
            db.collection('my_team')
                .where('user_id','==',user.info.uid)
                .get()
                .then(res => {
                    const newMyTeams = []
                    res.forEach(doc => {
                        const docData = doc.data()
                        docData.id = doc.id
                        newMyTeams.push(docData)
                    })
                    this.data.myteams = newMyTeams
                    console.log(newMyTeams)
                })
                .catch(error => {
                    alert(error.message)
                    console.log(error)
                })
        }
    }

    render() {
        return (
            <div>
                <h5>MY TEAM</h5>
                {this.data.myteams.map(team => 
                    // <Link href="/myteam/[id]" as={`/myteam/${team.team_id}`} key={team.id}>
                    <Link route={`/myteams/${team.team_id}`} key={team.id}>
                        <div style={{paddingBottom:"15px"}}>
                            <div style={{float:"left", marginRight:"15px"}}>
                                {/* <Image src="https://placehold.it/80x80" roundedCircle /> */}
                                <div style={{backgroundImage:`url(../static/team_test05.png)`, width:"80px", height:"80px", backgroundSize:"cover", borderRadius:"40px", border:"none"}}></div>
                            </div>
                            <div style={{overflow:"hidden", height:"80px", paddingTop:"12px"}}>
                                <div style={{float:"left"}}>
                                    <h5>{team.club_name}</h5>
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
                )}
            </div>
        )
    }

}
export default MyTeamList;
