import React from 'react'
import Navbars from '../component/Navbars'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Literatur from '../image/literatur.png';

function Mycollection() {
    return (
        <>
            <div><Navbars /></div>
            <h3 style={{ marginLeft: "115px", color: "white" }}> My Collection</h3>
            <div style={{ marginLeft: "115px" }}>
                <Card style={{ width: '18rem', height: "30rem" }}>
                    <Card.Img src={Literatur} />
                    <Card.Body>
                        <Card.Title>Card</Card.Title>
                        <Card.Text>
                            BOOK
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer >
                        <small className="font-weight-bold text-lg text-uppercase">Management System<small className="font-weight-bold text-lg text-uppercase" > 2012</small></small>
                    </Card.Footer>
                </Card>
            </div>

        </>

    )
}

export default Mycollection