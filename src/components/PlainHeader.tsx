import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import GoogleLogin from "react-google-login";
import axios from "axios";

import Badge from "@material-ui/core/Badge";

import { loginSuccess, showSelection } from "../redux/actions";
import { AppState } from "../types";
import { useStyles } from "../hooks/useStyles";

export const PlainHeader = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const user = useSelector((state: AppState) => state.user);
  const amountSelected = user.borrowedRecords.length;

  const responseGoogle = async (response: any) => {
    const res = await axios.post("/users/google/login", {
      id_token: response.tokenObj.id_token,
    });

    if (res.status === 200) {
      dispatch(loginSuccess(res.data, history));
    } else {
      //dispatch(loginFailed())
      alert("Login Failed");
    }
  };

  const handleSelectionClick = () => {
    dispatch(showSelection(true));
  };

  return (
    <nav>
      <h1>Welcome to My Records!</h1>
      <div className="btn-group header-btn-group">
        <GoogleLogin
          clientId="391700730466-tdi0a11fnhht3tl7budat5utlephuad9.apps.googleusercontent.com"
          buttonText="Sign In"
          render={(renderProps) => (
            <button
              className="btn"
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              Sign In
            </button>
          )}
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />

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
