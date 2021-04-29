import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Record } from "../../types";
import { borrowRecord } from "../../redux/actions";

type RecordCardProps = {
  record: Record;
};

export const UserRecordCard = (props: RecordCardProps) => {
  const { record } = props;
  const dispatch = useDispatch();

  const handleBorrowClick = (id: any) => {
    dispatch(borrowRecord(id));
  };

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
        <button className="btn" onClick={() => handleBorrowClick(record._id)}>
          Borrow
        </button>
      </div>
    </div>
  );
};
