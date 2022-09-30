import React, { useState } from 'react'
import Navbars from '../component/Navbars'
import Button from 'react-bootstrap/Button';
import { Card, Row, Col } from "react-bootstrap";
import Homes from '../image/home.png'
import { API } from '../config/api';
import { useQuery } from 'react-query';

function Mycollection() {
    const [literatur, setLiteratur] = useState([])
    let { data: literaturs } = useQuery("literaturCache", async () => {

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.token}`,
            }
        }

        const response = await API.get(`/collections}`, config);
        console.log("response literatur", response);

        const resultResponse = response.data.data.literatur;
        setLiteratur(resultResponse)

        return resultResponse;
    });


    return (
        <>
            <div><Navbars /></div>
            <h3 style={{ marginLeft: "115px", color: "white" }}> My Collection</h3>
            <div style={{ marginLeft: "115px" }}>
                <Row xs={1} md={4} className="g-4">
                    {literatur?.map((data, index) => {
                        return (
                            <Col>
                                <Card style={{ border: "none" }}>
                                    <Card.Img variant="top" src={Homes} style={{ height: "300px", borderRadius: "10px" }} />
                                    <Card.Body style={{ backgroundColor: "black" }}>
                                        <Card.Title style={{ backgroundColor: "black", color: "white", marginLeft: "-17px" }}>{data.literatur.title}</Card.Title>
                                        <Card.Text style={{ color: "white" }}>
                                            <Row style={{ marginLeft: "-28px" }}>
                                                <Col>{data.literatur.author}</Col>
                                                <Col style={{ marginLeft: "140px" }}>{data.literatur.publicationdate}</Col>
                                            </Row>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </div>

        </>

    )
}

export default Mycollection