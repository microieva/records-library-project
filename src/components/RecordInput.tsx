import React from "react";
import { useSelector } from "react-redux";

import { AppState } from "../types";

export const RecordInput = () => {
  const open = useSelector((state: AppState) => state.ui.recInputOpen);

  return open ? (
    <div className="overlay" style={{ display: "block" }}>
      <div className="rec-input-wrapper">
        <div className="rec-input-container"></div>
      </div>
    </div>
  ) : null;
};
