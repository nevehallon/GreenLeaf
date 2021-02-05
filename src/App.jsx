import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import { About } from "./components/about";
import Footer from "./components/footer";
import { Home } from "./components/home";
import { Navbar } from "./components/navbar";
import Signup from "./components/signup";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <header>
        <Navbar />
      </header>
      <main className="container-fluid flex-fill">
        <Switch>
          <Route path="/sign-up" component={Signup} />
          <Route path="/about" component={About} />
          <Route exact path="/" component={Home} />
          {/* <Redirect to="/" /> */}
        </Switch>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
