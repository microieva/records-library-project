// import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Header } from "./components/Header";
import HomePage from "./pages/HomePage";
import RecordPage from "./pages/RecordPage";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/records/:title" component={RecordPage} />
          <Route exact path="/login" component={Header} />
          <Route exact path="/" component={HomePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
