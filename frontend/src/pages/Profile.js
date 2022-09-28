import React from 'react'
import avatar from "../assets/profile/blank-profile.png";
import name from "../assets/profile/name.png";
import email from "../assets/profile/email.png";
import status from "../assets/profile/status.png";
import gender from "../assets/profile/gender.png";
import phone from "../assets/profile/phone.png";
import address from "../assets/profile/address.png";
import Navbars from '../component/Navbars';
function Profile() {
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
                                    asoy@mail.com
                                </span>
                                <span>Email</span>
                            </div>
                        </div>
                        <div className="profile-data">
                            <div className="profile-icon">
                                <img src={gender} alt="" />
                            </div>
                            <div className="profile-details">
                                <span style={{ fontSize: "18px", fontWeight: "bold" }}> Male</span>
                                <span>Gender</span>
                            </div>
                        </div>
                        <div className="profile-data">
                            <div className="profile-icon">
                                <img src={phone} alt="" />
                            </div>
                            <div className="profile-details">
                                <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                                    0890808908090
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
                                    jl.sawangan depok No.12
                                </span>
                                <span>Address</span>
                            </div>
                        </div>
                    </div>
                    <div className="profile-img">
                        <img src={avatar} alt="avatar" className="profile-avatar" />
                        <button className="profile-button">Change Photo Profile</button>
                    </div>
                </div>
            </div>
            <h3 style={{ marginLeft: "110px", color: "white" }}> My Literature</h3>
        </>
    );
}


export default Profile