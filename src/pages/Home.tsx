import React from "react";

import { RecordCard } from "../components/RecordCard";
import { Record } from "../types";

type HomeProps = {
  records: Record[];
};

const Home = (props: HomeProps) => {
  const { records } = props;
  console.log(records);
  return (
    <div className="home-container">
      <div className="list-container">
        {records
          ? records.map((record, i) => {
            return (
              <li style={{ listStyle: "none" }} key={i}>
                <RecordCard record={record} />
              </li>
            );
          })
          : false}
      </div>
    </div>
  );
};

export default Home;
