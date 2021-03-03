import React from "react";
import { Form, Col } from "react-bootstrap";

export default function CurrencyRow(props) {
  const { currencyopt } = props;
  return (
    <Form>
      <Form.Row className="align-items-center">
        <Col xs="auto">
          <Form.Label htmlFor="inlineFormInput" srOnly>
            Name
          </Form.Label>
          <Form.Control
            className="mb-2"
            id="inlineFormInput"
            placeholder="Jane Doe"
          />
          <Form.Control as="select" className="mb-2">
            {currencyopt.map(option => (
              <option key={option} vlaue={option}>
                {option}
              </option>
            ))}
          </Form.Control>
        </Col>
        =
        <Col xs="auto">
          <Form.Label htmlFor="inlineFormInput" srOnly>
            Name
          </Form.Label>
          <Form.Control
            className="mb-2"
            id="inlineFormInput"
            placeholder="Jane Doe"
          />
          <Form.Control as="select" className="mb-2">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Col>
      </Form.Row>
    </Form>
  );
}
