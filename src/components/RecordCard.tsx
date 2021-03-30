import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { AppState, Record } from "../types";
import { addRecord } from "../redux/actions";

type RecordCardProps = {
  record: Record;
};

export const RecordCard = (props: RecordCardProps) => {
  const { record } = props;
  const dispatch = useDispatch();
  const user = useSelector((state: AppState) => state.user);
  // const selectedRecords = useSelector(
  //   (state: AppState) => state.cart.selectedRecords
  // );
  console.log(user);

  const handleBorrowClick = (id: string) => {
    dispatch(addRecord(id));
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
