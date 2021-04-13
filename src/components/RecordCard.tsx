import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { Record, AppState } from "../types";
import { addRecord, removeRecord } from "../redux/actions";

type RecordCardProps = {
  record: Record;
};

export const RecordCard = (props: RecordCardProps) => {
  const { record } = props;
  const dispatch = useDispatch();
  const admin = useSelector((state: AppState) => state.user.isAdmin);
  //const available = record.available;

  const handleBorrowClick = (id: string) => {
    dispatch(addRecord(id));
  };

  const handleDelClick = (id: string) => {
    dispatch(removeRecord(id));
    //+api call
  };

  //edit: LINK TO RECORD-PAGE, cond.rendering with filled in inputs
  //delete: MAKE RED, will delete item from api
  return admin ? (
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
            Edit
          </Link>
        </button>
        <button
          className="btn btn-del"
          onClick={() => handleDelClick(record._id)}
        >
          Delete
        </button>
      </div>
    </div>
  ) : (
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
