import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import TopNav from "./components/molecules/TopNav/TopNav";
import Homepage from "./pages/Homepage/Homepage";
import MrFingers from "./pages/MrFingers/MrFingers";
import Pacific707 from "./pages/Pacific707/Pacific707";

import "./App.css";
import "./styles/main.scss";

export class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <TopNav />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/mrfingers" component={MrFingers} />
            <Route path="/pacific707" component={Pacific707} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
