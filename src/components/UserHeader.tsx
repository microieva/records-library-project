import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import Badge from "@material-ui/core/Badge";

import { logout, showSelection } from "../redux/actions";
import { AppState } from "../types";
import { useStyles } from "../hooks/useStyles";

export const UserHeader = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = useSelector((state: AppState) => state.user);
  const amountSelected = user.borrowedRecords.length;

  const handleLogout = () => {
    dispatch(logout(history));
    localStorage.removeItem("token");
  };

  const handleSelectionClick = () => {
    dispatch(showSelection(true));
  };

  return (
    <nav>
      <h1>Welcome {user.name}!</h1>
      <div className="btn-group header-btn-group">
        <button className="btn" onClick={handleLogout}>
          Sign Out
        </button>
        <Badge
          badgeContent={amountSelected}
          classes={{ badge: classes.customBadge }}
        >
          <button className="btn" onClick={handleSelectionClick}>
            Selection
          </button>
        </Badge>
      </div>
    </nav>
  );
};
