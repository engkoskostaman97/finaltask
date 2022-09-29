import React, { useState, useContext } from 'react'
import avatar from "../assets/profile/blank-profile.png";
import name from "../assets/profile/name.png";
import email from "../assets/profile/email.png";
import status from "../assets/profile/status.png";
import gender from "../assets/profile/gender.png";
import phone from "../assets/profile/phone.png";
import address from "../assets/profile/address.png";
import Navbars from '../component/Navbars';
import Editprofile from '../component/Editprofile';
import Literatur from '../image/literatur.png';
import { UserContext } from '../context/userContext';

import Card from 'react-bootstrap/Card';
function Profile() {
    // const [show, setShow] = useState(false);
    // const handleShow = () => setShow(true);
    // const handleClose = () => setShow(false);
    const [state] = useContext(UserContext);

    console.log("ini state", state);


    return (
        <>
            <div>
                <Navbars />
            </div>
            <h3 style={{ marginLeft: "110px", color: "white" }}> Profile</h3>
            <div className="profile-container">
                <div className="profile-card">
                    <div className="profile-desc">

                        <div className="profile-data">
                            <div className="profile-icon">
                                <img src={email} alt="" />
                            </div>
                            <div className="profile-details">
                                <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                                    {state.user.email}
                                </span>
                                <span>Email</span>
                            </div>
                        </div>
                        <div className="profile-data">
                            <div className="profile-icon">
                                <img src={gender} alt="" />
                            </div>
                            <div className="profile-details">
                                <span style={{ fontSize: "18px", fontWeight: "bold" }}> {state.user.gender}</span>
                                <span>Gender</span>
                            </div>
                        </div>
                        <div className="profile-data">
                            <div className="profile-icon">
                                <img src={phone} alt="" />
                            </div>
                            <div className="profile-details">
                                <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                                    {state.user.phone}
                                </span>
                                <span>Mobile Phone</span>
                            </div>
                        </div>
                        <div className="profile-data">
                            <div className="profile-icon">
                                <img src={address} alt="" />
                            </div>
                            <div className="profile-details">
                                <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                                    {state.user.addres}
                                </span>
                                <span>Address</span>
                            </div>
                        </div>
                        {/* <div>
                            <button className='btn-edite'>Edite Profile</button>
                        </div> */}
                    </div>
                    <div className="profile-img">
                        <img src={avatar} alt="avatar" className="profile-avatar" />
                        <button className="profile-button" >Change Photo Profile</button>
                        {/* <Editprofile show={show} handleClose={handleClose} /> */}
                    </div>
                </div>
            </div>
            <h3 style={{ marginLeft: "110px", color: "white" }}> My Literature</h3>
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
    );
}


export default Profile