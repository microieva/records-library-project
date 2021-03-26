import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { AppState, Record } from "../types";
import { addRecord, updateBorrowedRecords } from "../redux/actions";

type RecordCardProps = {
  record: Record;
};

export const RecordCard = (props: RecordCardProps) => {
  const { record } = props;
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state: AppState) => state.user.user);
  const selectedRecords = useSelector(
    (state: AppState) => state.cart.selectedRecords
  );

  const handleBorrowClick = () => {
    dispatch(addRecord(record));
    if (loggedInUser) {
      dispatch(updateBorrowedRecords(selectedRecords));
      console.log("borrowedRecords: ", loggedInUser.borrowedRecords);
    }
    console.log("state.cart.selectedRecords: ", selectedRecords);
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
        <button className="btn" onClick={handleBorrowClick}>
          Borrow
        </button>
      </div>
    </div>
  );
};
