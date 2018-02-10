import React, { Component } from "react";
import Nav from "./components/nav/nav";
import { Home, Team, App, Contact, Populate } from "./pages";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./app.css";

class Website extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <div>
            <Switch>
              <Route exact path="/populate" component={Populate} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/team" component={Team} />
              <Route exact path="/app" component={App} />
              <Route exact path="/contact" component={Contact} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default Website;
