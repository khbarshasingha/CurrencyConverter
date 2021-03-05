import React from "react";
import { Form, Col, Container } from "react-bootstrap";

export default function CurrencyRow({
  currencyopt,
  selectedCurrency,
  onchangeCurrency,
  amount,
  onchangeAmount
}) {
  return (
    <Container>
      <Form>
        <Form.Control
          value={amount}
          type="number"
          onChange={onchangeAmount}
          className="mb-2"
          id="inlineFormInput"
        />
        <Form.Control
          as="select"
          value={selectedCurrency}
          onChange={onchangeCurrency}
          className="mb-2"
        >
          {currencyopt.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Form.Control>
      </Form>
    </Container>
  );
}
