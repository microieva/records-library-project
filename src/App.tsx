import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import { useRecords } from "./hooks/useRecords";
import { AppState } from "./types";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import RecordPage from "./pages/RecordPage";
import "./App.scss";

function App() {
  useRecords();
  const records = useSelector((state: AppState) => state.records.records);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={() => <Home records={records} />} />
          <Route
            exact
            path="/records/:title"
            component={() => <RecordPage records={records} />}
          />
          <Route exact path="/google/login" component={LoginPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
