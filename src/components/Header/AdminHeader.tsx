import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { logout, showRecordForm } from "../../redux/actions";

import { AppState } from "../../types";

export const AdminHeader = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state: AppState) => state.user);

  const handleLogout = () => {
    dispatch(logout(history));
    localStorage.removeItem("token");
  };

  const handleAddClick = () => {
    dispatch(showRecordForm(true));
  };

  return (
    <nav>
      <h1>Welcome {user.name}!</h1>
      <div className="btn-group btn-group--width">
        <button className="btn" onClick={handleLogout}>
          Sign Out
        </button>

        <button className="btn" onClick={handleAddClick}>
          Add New Rec
        </button>
      </div>
    </nav>
  );
};
