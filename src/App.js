import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePage } from "./Components/HomePage";
import { Header } from "./Components/Header";
import { Signup } from "./Components/Signup";
import { Login } from "./Components/Login";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
        </Switch>
      </main>
      <footer>
        <Footer />
      </footer>
    </Router>
  );
}

export default App;
