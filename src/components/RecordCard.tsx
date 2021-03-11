import React from "react";
import { Link } from "react-router-dom";

import { Record } from "../types";

type RecordCardProps = {
  record: Record;
};

export const RecordCard = (props: RecordCardProps) => {
  const { record } = props;

  return (
    <div className="card-container">
      <h2>{record.title}</h2>
      <div className="div-image">
        <img src={record.image} alt="record" />
      </div>
      <div className="btn-group">
        <button className="btn">
          <Link
            to={`/records/${record.title}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Listen
          </Link>
        </button>
        <button className="btn">Borrow</button>
      </div>
    </div>
  );
};
