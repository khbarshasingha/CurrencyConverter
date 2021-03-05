import React, { useState } from "react";
import { Form, Container, Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../cssfiles/signup.css";

export const Signup = () => {
  const [udata, setudata] = useState({ fname: "", email: "", pwd: "" });

  const handleChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    setudata({ ...udata, [name]: value });
  };

  const handleSubmit = event => {
    window.localStorage.setItem("name", udata.fname);
    window.localStorage.setItem("email", udata.email);
    window.localStorage.setItem("pwd", udata.pwd);
    alert(
      "Succesfully created account! Log in to view your characters or episodes"
    );
  };
  return (
    <>
      <Container>
        <Row className="outer-form">
          <Col sm={12} md={8} lg={6}>
            <Form style={{ padding: "25px" }}>
              <h1 style={{ fontFamily: "Akaya Telivigala" }}>
                Create an Account
              </h1>
              <Form.Group controlId="formGridName">
                <Form.Label>Full Name:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your full name"
                  value={udata.name}
                  name="fname"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formGridEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email id"
                  value={udata.email}
                  name="email"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={udata.pwd}
                  name="pwd"
                  onChange={handleChange}
                />
              </Form.Group>

              <Button variant="primary" type="submit" onClick={handleSubmit}>
                Sign Up
              </Button>
            </Form>
          </Col>
          <Col sm={12} md={4} className="col2">
            Already Have an Account?
            <br />
            <hr />
            <Link to="/login">
              <button type="button" className="btn btn-primary btn-lg">
                Log In
              </button>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};
