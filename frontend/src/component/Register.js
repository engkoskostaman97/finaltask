import React from 'react';
import { Modal, Button, Form, InputGroup } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';


return (
  <Modal
    size="md"
    centered
  >
    <Modal.Body className="bg-Modal">
      <div className="card-auth p-4">
        <div
          style={{
            fontSize: "30px",
            lineHeight: "49px",
            fontWeight: "700",
            color: "white",
          }}
          className="mb-2"
        >
          Register
        </div>
        {message && message}
        <form onSubmit={(e) => handleSubmit.mutate(e)}>
          <div className="mt-3 form">
            <input
              type="email"
              placeholder="Email"
              value={email}
              name="email"
              onChange={handleChange}
              className="px-3 py-2 mt-3"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              id="ShowPass"
              value={password}
              onChange={handleChange}
              className="px-3 py-2 mt-3"
            />
            <input
              type="text"
              placeholder="FullName"
              name="fullname"
              value={fullname}
              onChange={handleChange}
              className="px-3 py-2 mt-3"
            />
            <input
              type="text"
              placeholder="Gender (L/P)"
              name="gender"
              value={gender}
              onChange={handleChange}
              className="px-3 py-2 mt-3"
            />
            <input
              type="number"
              placeholder="Phone"
              name="phone"
              value={phone}
              onChange={handleChange}
              className="px-3 py-2 mt-3"
            />
            <input
              type="text"
              placeholder="Address"
              name="address"
              value={address}
              onChange={handleChange}
              className="px-3 py-2 mt-3"
            />
          </div>
          <div>
            <input
              type="checkbox"
              id="Show"
              onClick={ShowPass}
              className="mt-3"
            />
            <label for="Show" className="ms-1">
              Show Password
            </label>
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btnRegister" onClick={() => setRegisterShow(false)}  >Register</button>
            <p className="warning">
              Already have an account?
              <button className="btnHere" onClick={registerHere} >
                Click here
              </button>
            </p>
          </div>
        </form>
      </div>
    </Modal.Body>
  </Modal>
);


export default Register;
