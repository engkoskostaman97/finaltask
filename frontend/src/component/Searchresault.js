import React from 'react'
import Col from 'react-bootstrap/Col';
import { Form, Button } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import { AiOutlineSearch } from 'react-icons/ai';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Homes from '../image/home.png'
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { API } from '../config/api';


function Searchresault() {
    // Fetching product data from database
    let { data: literaturs } = useQuery('literaturssCache', async () => {
        const response = await API.get('/literaturs');
        return response.data.data;
    });

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
            <div>
                <div style={{ marginLeft: "115px", marginTop: "20px", color: "white" }}>
                    <p>Anytime</p>
                    <DropdownButton id="dropdown-basic-button" title="Since " variant="light">
                        <Dropdown.Item href="/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="/action-3">Something else</Dropdown.Item>
                    </DropdownButton>
                </div>
            </div>
            <CardGroup style={{ marginLeft: "115px", marginTop: "10px" }} className="containerCard">
                <div>
                    <div class="col-4 " style={{width:"100%"}} >
                        <Row xs={1} md={4} className="g-6" style={{width:"100%"}}>
                            {literaturs?.map((item) => (
                                <Col>
                                    <Link to="/detail" className='text-decoraction-none'>
                                        <Card>
                                            <Card.Img variant="top" src={Homes} />
                                            <Card.Body>
                                                <Card.Title>{item.title}</Card.Title>
                                                <Card.Text>
                                                    This is a wider card with supporting text below as a natural lead-in
                                                    to additional content. This content is a little bit longer.
                                                </Card.Text>
                                            </Card.Body>
                                            <Card.Footer>
                                                <small className="text-muted">Last updated 3 mins ago</small>
                                            </Card.Footer>
                                        </Card>
                                    </Link>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </div>

            </CardGroup>



        </>
    )
}

export default Searchresault