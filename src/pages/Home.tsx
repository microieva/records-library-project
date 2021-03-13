import React from "react";

import { Header } from "../components/Header";
import { RecordCard } from "../components/RecordCard";
import { Record } from "../types";

type HomeProps = {
  records: Record[];
};

const Home = (props: HomeProps) => {
  const { records } = props;
  const user = false;

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
