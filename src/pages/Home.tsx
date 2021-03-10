import React from "react";
import { useSelector } from "react-redux";
//import { Link } from 'react-router-dom'

import { useRecords } from "../hooks/useRecords";
import { AppState } from "../types";
import { Header } from "../components/Header";
import { RecordCard } from "../components/RecordCard";

const Home = () => {
  useRecords();
  const records = useSelector((state: AppState) => state.records.records);
  const user = false;
  console.log("RECORDS HOME: ", records);

  return (
    <div className="home-container">
      <Header user={user} />
      <div className="list-container">
        {records.map((record, i) => {
          return (
            <li style={{ listStyle: "none" }} key={i}>
              <RecordCard record={record} />
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
