import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//import { useSelector } from "react-redux";

import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import RecordPage from "./pages/RecordPage";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/records/:title" component={RecordPage} />
          <Route exact path="/google/login" component={LoginPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
