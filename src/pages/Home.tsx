import React from "react";
import { useSelector } from "react-redux";
//import { Link } from 'react-router-dom'

import { useRecords } from "../hooks/useRecords";
import { AppState } from "../types";
import { RecordCard } from "../components/RecordCard";

const Home = () => {
  useRecords();
  const records = useSelector((state: AppState) => state.records.records);

  console.log("RECORDS HOME: ", records);
  return (
    <div className="home-container">
      {records.map((record, i) => {
        return (
          <li style={{ listStyle: "none" }} key={i}>
            <RecordCard record={record} />
          </li>
        );
      })}
    </div>
  );
};

export default Home;
