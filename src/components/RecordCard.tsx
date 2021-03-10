import React from "react";

import { Record } from "../types";

type RecordCardProps = {
  record: Record;
};

export const RecordCard = (props: RecordCardProps) => {
  const { record } = props;

  return (
    <div className="card-container">
      <h2>{record.title}</h2>
      <img src={record.image} alt="record" />
    </div>
  );
};
