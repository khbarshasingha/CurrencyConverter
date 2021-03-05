import React from "react";
import { Row, Container, Col } from "react-bootstrap";

function Footer() {
  return (
    <Container fluid>
      <Row>
        <Col>
          {" "}
          My projects{" "}
          <a href="https://www.linkedin.com/in/kh-barsha-singha-59b279a1">
            <i className="fab fa-github-square" />
          </a>{" "}
        </Col>
        <Col>
          {" "}
          Contact me{" "}
          <a href="https://github.com/khbarshasingha">
            {" "}
            <i className="fab fa-linkedin" />
          </a>
        </Col>
      </Row>
    </Container>
  );
}
export default Footer;
