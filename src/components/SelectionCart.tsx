import React from "react";
import { useSelector } from "react-redux";

import { AppState } from "../types";
import { SelectionCartItem } from "./SelectionCartItem";

export const SelectionCart = () => {
  const records = useSelector((state: AppState) => state.records.records);
  const selectedRecordIds = useSelector(
    (state: AppState) => state.user.borrowedRecords
  );
  const selectedRecords = records.filter((record) => {
    return selectedRecordIds.find((id) => id === record._id);
  });

  console.log("CART: ", selectedRecords);

  const open = useSelector((state: AppState) => state.ui.selectionOpen);

  return open ? (
    <div className="selection-cart-wrapper">
      <div className="selection-cart-container">
        {selectedRecords.length > 0
          ? selectedRecords.map((record, i) => {
            return (
              <li style={{ listStyle: "none" }} key={i}>
                <SelectionCartItem record={record} />
              </li>
            );
          })
          : false}
      </div>
    </div>
  ) : (
    false
  );
};
