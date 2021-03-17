// import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
//import axios from 'axios'

import { useRecords } from "./hooks/useRecords";
import { AppState } from "./types";
import { Header } from "./components/Header";
import Home from "./pages/Home";
import RecordPage from "./pages/RecordPage";
import "./App.scss";

function App() {
  useRecords();
  const records = useSelector((state: AppState) => state.records.records);
  const user = false;

  /*useEffect(() => {
    axios.get('http://localhost:3001/api/v1/records')
  })*/

  return (
    <div className="App">
      <Header user={user} />
      <Router>
        <Switch>
          <Route
            exact
            path="/records/:title"
            component={() => <RecordPage records={records} />}
          />
          <Route exact path="/login" component={() => <Header user={user} />} />
          <Route exact path="/" component={() => <Home records={records} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
