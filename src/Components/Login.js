import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button, Container, Col } from "react-bootstrap";
import "../cssfiles/login.css";
import auth from "./auth";
const Login = () => {
  const [logindata, setlogindata] = useState({
    email: "",
    pwd: ""
  });
  let history = useHistory();
  const handleSubmit = event => {
    if (
      logindata.email === window.localStorage.getItem("email") &&
      logindata.pwd === window.localStorage.getItem("pwd")
    ) {
      auth.login(() => {
        history.push("/");
      });
    } else {
      alert("wrong credentials");
    }
  };
  const handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    setlogindata({ ...logindata, [name]: value });
  };
  return (
    <Container>
      <Col sm={12} md={12} lg={6} className="login">
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={logindata.email}
              name="email"
              onChange={handleChange}
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={logindata.pwd}
              name="pwd"
              onChange={handleChange}
              placeholder="Password"
            />
          </Form.Group>

          <Button variant="outline-success" onClick={handleSubmit} size="lg">
            Log In
          </Button>
        </Form>
      </Col>
    </Container>
  );
};
export default Login;
