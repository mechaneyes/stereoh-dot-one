// import React, { Component } from "react";

// function App() {
//   return (
//     <div className="App">
//       <TopNav />
//       <Homepage />
//       <Route exact path="/" component={Homepage} />
//       <Route path="/mccall" component={McCall} />
//     </div>
//   );
// }

// export default App;

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "./styles/main.scss";

import TopNav from "./components/molecules/TopNav/TopNav";
import Homepage from "./pages/Homepage/Homepage";
import McCall from "./pages/McCall/McCall";

export class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <TopNav />
          {/* <Homepage /> */}
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/mccall" component={McCall} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
