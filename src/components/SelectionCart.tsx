/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { AppState } from "../types";
import { showSelection } from "../redux/actions";
import { SelectionCartItem } from "./SelectionCartItem";

export const SelectionCart = () => {
  const records = useSelector((state: AppState) => state.records.records);
  const selectedRecordIds = useSelector(
    (state: AppState) => state.user.borrowedRecords
  );
  const open = useSelector((state: AppState) => state.ui.selectionOpen);
  const dispatch = useDispatch();

  const selectedRecords = records.filter((record) => {
    return selectedRecordIds.find((id) => id === record._id);
  });

  const handleClose = () => {
    if (open) {
      dispatch(showSelection(false));
    }
  };

  return open ? (
    <div
      onClick={handleClose}
      //role="background"
      className="overlay"
      style={{ display: "block" }}
    >
      <div className="selection-cart-wrapper">
        <div className="selection-cart-container">
          {selectedRecords.length < 1 ? (
            <h3 style={{ color: "rgb(11, 14, 19)", marginTop: "60%" }}>
              No Selection
            </h3>
          ) : selectedRecords.length === 1 ? (
            <h3 style={{ color: "darkgrey", margin: "1rem" }}>
              {selectedRecords.length} Item Selected
            </h3>
          ) : (
            <h3 style={{ color: "darkgrey", margin: "1rem" }}>
              {selectedRecords.length} Items Selected
            </h3>
          )}
          {selectedRecords.length > 0
            ? selectedRecords.map((record, i) => {
              return (
                <li style={{ listStyle: "none" }} key={i}>
                  <SelectionCartItem record={record} />
                </li>
              );
            })
            : null}
        </div>
      </div>
    </div>
  ) : null;
};
