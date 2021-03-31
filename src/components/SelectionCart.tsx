import React from "react";
import { useSelector } from "react-redux";

import { AppState } from "../types";
//import { showSelection } from "../redux/actions";
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
  //const dispatch = useDispatch()

  /*const handleClose = (e: MouseEvent) => {
    dispatch(showSelection(false))
  }*/

  return open ? (
    <div
      //onClick ={e => handleClose(e)}
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
            <h3 style={{ color: "darkgrey" }}>
              {selectedRecords.length} Item Selected
            </h3>
          ) : (
            <h3 style={{ color: "darkgrey" }}>
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
            : false}
        </div>
      </div>
    </div>
  ) : null;
};
