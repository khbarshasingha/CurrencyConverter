import React, { useState, useEffect } from "react";
import CurrencyRow from "./Components/CurrencyRow";
import { Container } from "react-bootstrap";

const BASE_URL = "https://api.exchangeratesapi.io/latest";

function App() {
  const [currencyopt, setCurrencyopt] = useState([]);
  console.log(currencyopt);
  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => {
        setCurrencyopt([data.base, ...Object.keys(data.rates)]);
      });
  }, []);
  return (
    <Container>
      <h1> Convert</h1>
      <CurrencyRow currencyopt={currencyopt} />
    </Container>
  );
}

export default App;
