import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePage } from "./Components/HomePage";
import { Container } from "react-bootstrap";
import { Header } from "./Components/Header";
import { Signup } from "./Components/Signup";
import { Login } from "./Components/Login";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
      </Switch>
    </Router>
  );
}

export default App;
