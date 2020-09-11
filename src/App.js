import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ScrollToTop from "./components/atoms/ScrollToTop/ScrollToTop";
import TopNav from "./components/molecules/TopNav/TopNav";
import Homepage from "./pages/Homepage/Homepage";
import MrFingers from "./pages/MrFingers/MrFingers";
import Neoneon from "./pages/Neoneon/Neoneon";
import Saturn6 from "./pages/Saturn6/Saturn6";
import Feedback from "./pages/Feedback/Feedback";
import SignUp from "./pages/SignUp/SignUp";
import PromoterNew from "./pages/PromoterNew/PromoterNew";

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
            <Route path="/tropical-freeze" component={MrFingers} />
            <Route path="/bassline-basin" component={Neoneon} />
            <Route path="/signup" component={SignUp} />
            <Route path="/feedback" component={Feedback} />
            <Route path="/pnew" component={PromoterNew} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
