import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ScrollToTop from "./components/atoms/ScrollToTop/ScrollToTop";
import TopNav from "./components/molecules/TopNav/TopNav";
import Homepage from "./pages/Homepage/Homepage";
import Saturn6 from "./pages/Saturn6/Saturn6";
import TropicalFreeze from "./pages/TropicalFreeze/TropicalFreeze";
import BasslineBasin from "./pages/BasslineBasin/BasslineBasin";
import About from "./pages/About/About";
import Feedback from "./pages/Feedback/Feedback";
import SignUp from "./pages/SignUp/SignUp";
import Oct02 from "./pages/Oct02/Oct02";

import "./App.css";
import "./styles/main.scss";

export class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* <AnonymousID /> */}
          <ScrollToTop />
          <TopNav />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/saturn6" component={Saturn6} />
            <Route path="/tropical-freeze" component={TropicalFreeze} />
            <Route path="/bassline-basin" component={BasslineBasin} />
            <Route path="/about" component={About} />
            <Route path="/signup" component={SignUp} />
            <Route path="/feedback" component={Feedback} />
            <Route path="/octtwo" component={Oct02} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
