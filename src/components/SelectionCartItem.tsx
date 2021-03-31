import React from "react";
import { Link } from "react-router-dom";
//import { useSelector } from "react-redux";
//import { useDispatch } from "react-redux";

import { Record } from "../types";
//import { removeRecord } from "../redux/actions";

type SelectionItemProps = {
  record: Record;
};

export const SelectionCartItem = (props: SelectionItemProps) => {
  const { record } = props;
  //const dispatch = useDispatch();
  //const user = useSelector((state: AppState) => state.user);
  //const available = record.available;

  /*const handleRemoveClick = (id: string) => {
    dispatch(removeRecord(id));
  };*/

  return (
    <div className="selection-item-container">
      <Link
        to={`/records/${record.title}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <img src={record.image} alt="record" />
        <h4>{record.title}</h4>
        {/* <icon onClick={handleRemoveClick}> remove </icon> */}
      </Link>
    </div>
  );
};
