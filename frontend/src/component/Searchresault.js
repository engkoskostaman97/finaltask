import React from 'react'
import Col from 'react-bootstrap/Col';
import { Form, Button } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import { AiOutlineSearch } from 'react-icons/ai';

function Searchresault() {
    return (
        <>
            <div className="d-grid gap-2" >
                <Form>
                    <Row>
                        <Col xs={7} style={{
                            marginLeft: "120px",
                            justifyContent: "center"
                        }}>
                            <Form.Control placeholder="Search for literature" />
                        </Col>
                        <Col>
                            <Button
                                className="ml-2"
                                type="submit"
                                style={{
                                    padding: 5,
                                    backgroundColor: "red"
                                }}
                                href="/search"
                            >
                                <AiOutlineSearch size="26px" color="white" />
                            </Button>
                        </Col>

                    </Row>
                </Form>
            </div>

        </>
    )
}

export default Searchresault