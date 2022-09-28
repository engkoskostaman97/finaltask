import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import Homes from '../image/home.png';
import Literatur from '../image/literatur.png'

function Landing() {
    return (
        <>
            <div>
                <img src={Literatur} alt="literatur" className='literatur' />
            </div>
            <Container className="landing">
                <Row noGutters style={{ width: '100%' }}>
                    <Col md={5}>
                        <h1 className="tnr text-light mt-5" style={{ fontFamily: 'Times New Roman' }}>
                            <strong>
                                source <i>of</i> intelligence
                            </strong>
                        </h1>
                        <p className='text-light'>Sign-up and recieve unlimited access to all</p>
                        <p className='text-light'>of your literatures - share your literatures.</p>
                        <br />
                        <div className="mb-5">

                            <Button className="me-2" variant="danger" size="lg">
                                Sign Up
                            </Button>

                            <Button variant="light" size="lg">
                                Sign In
                            </Button>


                        </div>

                    </Col>
                    <div className='d-flex justify-content-end '>
                        <img src={Homes} alt="landing" className="landing-image" />

                    </div>


                </Row>
            </Container>
        </>
    )
}

export default Landing