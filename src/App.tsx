import React from "react";
import { useSelector } from "react-redux";
//import { Link } from 'react-router-dom'

import { useRecords } from "./hooks/useRecords";
import { AppState } from "./types";
//import Routes from './Routes';
import "./App.css";

function App() {
  useRecords();
  const records = useSelector((state: AppState) => state.records.records);

  console.log("RECORDS: ", records);
  return (
    <div className="App">
      THERE ARE {records.length} FOUND
      {/* <Routes /> */}
    </div>
  );
}

export default App;
