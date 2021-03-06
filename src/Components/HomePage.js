import React, { useState, useEffect } from "react";
import CurrencyRow from "./CurrencyRow";
import { Container, Row, Col } from "react-bootstrap";
import "../cssfiles/homepage.css";
const BASE_URL = "https://api.exchangeratesapi.io/latest";

export const HomePage = () => {
  const [currencyopt, setCurrencyopt] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [exchangeRate, setExchangeRate] = useState();
  const [amount, setAmount] = useState(1);
  const [amountFrom, setAmountFrom] = useState(true);

  let toAmount, fromAmount;
  if (amountFrom) {
    fromAmount = amount;
    toAmount = amount * exchangeRate;
  } else {
    toAmount = amount;
    fromAmount = amount / exchangeRate;
  }
  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => {
        const firstCurrency = Object.keys(data.rates)[0];
        setCurrencyopt([data.base, ...Object.keys(data.rates)]);
        setFromCurrency(data.base);
        setToCurrency(firstCurrency);
        setExchangeRate(data.rates[firstCurrency]);
      });
  }, []);

  useEffect(() => {
    if (fromCurrency != null && toCurrency != null) {
      fetch(`${BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}`)
        .then(res => res.json())
        .then(data => setExchangeRate(data.rates[toCurrency]));
    }
  }, [fromCurrency, toCurrency]);

  const handlefromAmountChange = e => {
    setAmount(e.target.value);
    setAmountFrom(true);
  };

  const handleToAmountChange = e => {
    setAmount(e.target.value);
    setAmountFrom(false);
  };
  return (
    <Container>
      <Row className="currency-form">
        {" "}
        <Col sm={12} md={6} lg={6} xl={6}>
          <CurrencyRow
            selectedCurrency={fromCurrency}
            currencyopt={currencyopt}
            onchangeCurrency={e => setFromCurrency(e.target.value)}
            onchangeAmount={handlefromAmountChange}
            amount={fromAmount}
          />
        </Col>
        <Col sm={12} md={6} lg={6} xl={6}>
          <CurrencyRow
            selectedCurrency={toCurrency}
            currencyopt={currencyopt}
            onchangeCurrency={e => setToCurrency(e.target.value)}
            onchangeAmount={handleToAmountChange}
            amount={toAmount}
          />
        </Col>
      </Row>
    </Container>
  );
};
