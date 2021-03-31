/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from "react";
//import { Link } from "react-router-dom";
//import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { Record } from "../types";
import { removeRecord } from "../redux/actions";

type SelectionItemProps = {
  record: Record;
};

export const SelectionCartItem = (props: SelectionItemProps) => {
  const { record } = props;
  const dispatch = useDispatch();
  //const user = useSelector((state: AppState) => state.user);
  //const available = record.available;

  const handleRemoveClick = (id: string) => {
    dispatch(removeRecord(id));
  };

  return (
    <div className="selection-item-container">
      <div className="img-and-titles">
        <img className="item-img" src={record.image} alt="record" />
        <div className="item-titles">
          <h4>{record.title}</h4>
          <p>{record.authors.join(", ")}</p>
        </div>
      </div>
      <div className="icon-div" onClick={() => handleRemoveClick(record._id)}>
        <i className="fas fa-trash-alt"></i>
      </div>
    </div>
  );
};
