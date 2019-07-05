import Link from 'next/link';
import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';


class MyTeamList extends Component {
        
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Card style={{ width: "150px" }}>
                    <Card.Img variant="top" src="https://placehold.it/100x100" />
                    {/* <Image style={{position:"absolute", width:"100px", right:"5%", top:"4%"}} src="https://placehold.it/130x130" roundedCircle /> */}
                    <Card.Body>
                        <Card.Title>FC 치키토</Card.Title>
                        <Card.Text>
                        description
                        </Card.Text>
                        <Link href="/myteam">
                            <Button variant="primary">GO</Button>
                        </Link>
                    </Card.Body>
                </Card>

            </div>
        )
    }

}
export default MyTeamList;
