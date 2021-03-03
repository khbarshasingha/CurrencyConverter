import React, { useState, useEffect } from "react";
import CurrencyRow from "./Components/CurrencyRow";
import { Container, Row } from "react-bootstrap";

const BASE_URL = "https://api.exchangeratesapi.io/latest";

function App() {
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
      <h1> Convert</h1>
      <Row>
        {" "}
        <CurrencyRow
          selectedCurrency={fromCurrency}
          currencyopt={currencyopt}
          onchangeCurrency={e => setFromCurrency(e.target.value)}
          onchangeAmount={handlefromAmountChange}
          amount={fromAmount}
        />
        =
        <CurrencyRow
          selectedCurrency={toCurrency}
          currencyopt={currencyopt}
          onchangeCurrency={e => setToCurrency(e.target.value)}
          onchangeAmount={handleToAmountChange}
          amount={toAmount}
        />
      </Row>
    </Container>
  );
}

export default App;
