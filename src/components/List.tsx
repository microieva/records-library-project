/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import { useSelector } from "react-redux";

import { useRecords } from "../hooks/useRecords";
import { AppState } from "../types";
import { RecordCard } from "../components/RecordCard";

export const List = () => {
  useRecords();
  const records = useSelector((state: AppState) => state.records.records);

  return (
    <div className="list-wrapper">
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
