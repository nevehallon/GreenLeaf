import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import { About } from "./components/about";
import Footer from "./components/footer";
import { Home } from "./components/home";
import { Navbar } from "./components/navbar";
import Signup from "./components/signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Signin from "./components/signin";
import userService from "./services/userService";
import Logout from "./components/logout";
import MyCards from "./components/myCards";
import BizSignup from "./components/bizSignup";
import CreateCard from "./components/createCard";
import ProtectedRoute from "./common/protectedRoute";
import EditCard from "./components/editCard";

class App extends Component {
  state = { user: null };

  componentDidMount() {
    const user = userService.getCurrentUser();
    this.setState({ user });
  }

  render() {
    const { user } = this.state;
    return (
      <div className="d-flex flex-column min-vh-100">
        <ToastContainer />
        <header>
          <Navbar user={user} />
        </header>
        <main className="container-fluid flex-fill">
          <Switch>
            <ProtectedRoute path="/edit/:id" component={EditCard} biz={true} />
            <ProtectedRoute path="/create-card" component={CreateCard} biz={true} />
            <ProtectedRoute path="/my-cards" component={MyCards} biz={true} />
            <Route path="/sign-up" component={Signup} />
            <Route path="/biz-sign-up" component={BizSignup} />
            <Route path="/sign-in" component={Signin} />
            <Route path="/logout" component={Logout} />
            <Route path="/about" component={About} />
            <Route exact path="/" component={Home} />
            <Redirect to="/" /> {/* add 404 page not found */}
          </Switch>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
