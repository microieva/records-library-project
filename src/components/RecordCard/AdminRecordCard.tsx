import React from "react";
import { Link } from "react-router-dom";
//import { useSelector, useDispatch } from "react-redux";

import { Record } from "../../types";

type RecordCardProps = {
  record: Record;
};

export const AdminRecordCard = (props: RecordCardProps) => {
  const { record } = props;
  //const dispatch = useDispatch();
  //const available = record.available;

  const handleDelClick = (id: string) => {
    //dispatch(removeRecord(id));
    //+api call
  };

  //edit: LINK TO RECORD-PAGE, cond.rendering with filled in inputs
  //delete: MAKE RED, will delete item from api
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
  );
};
