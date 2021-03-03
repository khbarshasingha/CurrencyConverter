import React, { useState, useEffect } from "react";
import CurrencyRow from "./Components/CurrencyRow";
import { Container } from "react-bootstrap";

const BASE_URL = "https://api.exchangeratesapi.io/latest";

function App() {
  const [currencyopt, setCurrencyopt] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();

  console.log(currencyopt);
  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => {
        const firstCurrency = Object.keys(data.rates)[0];
        setCurrencyopt([data.base, ...Object.keys(data.rates)]);
        setFromCurrency(data.base);
        setToCurrency(firstCurrency);
      });
  }, []);
  return (
    <Container>
      <h1> Convert</h1>
      <CurrencyRow
        toCurrency={toCurrency}
        fromCurrency={fromCurrency}
        currencyopt={currencyopt}
      />
    </Container>
  );
}

export default App;
