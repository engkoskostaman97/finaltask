import React from 'react'
import Navbars from '../component/Navbars'
import { Form, Card, Row, Col, Button } from "react-bootstrap";

function Addliterature() {
    return (
        <>
            <div><Navbars /></div>
            <h3 style={{ marginLeft: "115px", color: "white" }}> Add Literature</h3>

            <div style={{ backgroundColor: "black", marginTop: "11vh" }}>
                <form className=" row col-10 d-flex justify-content-center" style={{ marginLeft: "120px" }}  >
                    <div className="row g-2 justify-content-center">
                        <div className="d-grid gap-2">
                            <Form.Control
                                type="text"
                                placeholder="Title"
                                name="title"
                                className="bg-dark text-white"
                            />
                        </div>
                        <div className="d-grid gap-2">
                            <Form.Control
                                type="text"
                                placeholder="Publication Date"
                                name="publication date"
                                className="bg-dark text-white"
                            />
                        </div>
                        <div className="d-grid gap-2">
                            <Form.Control
                                type="text"
                                placeholder="Pages"
                                name="pages"
                                className="bg-dark text-white"
                            />
                        </div>
                        <div className="d-grid gap-2">
                            <Form.Control
                                type="text"
                                placeholder="ISBN"
                                name="isbn"
                                className="bg-dark text-white"
                            />
                        </div>
                        <div className="d-grid gap-2">
                            <Form.Control
                                type="text"
                                placeholder="Author"
                                name="author"
                                className="bg-dark text-white"
                            />
                        </div>



                        <div>
                            <div className="col-4">
                                <div className="form-floating">
                                    <Form.Group className=" mt-2 ms-2 d-flex ">

                                        <Form.Label
                                            for="fileattach"
                                            className="d-block p-2 bg-dark text-white rounded border"
                                            type="file"
                                            style={{ cursor: "pointer" }}
                                        >
                                            Attach Thumbail

                                        </Form.Label>
                                        <Form.Control
                                            type="file"
                                            id="fileattach"
                                            name="fileattach"
                                            hidden
                                        />
                                    </Form.Group>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 d-flex justify-content-end">
                            <button
                                class="btn btn-danger float-md-end btn-l d-grid gap-2 col-2"
                                type="submit"
                            >
                                Add Literature
                            </button>
                        </div>

                    </div>
                </form>

            </div>
        </>
    )
}

export default Addliterature