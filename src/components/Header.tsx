import React from "react";
import GoogleLogin from "react-google-login";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import Badge from "@material-ui/core/Badge";
import { useStyles } from "../hooks/useStyles";

import { AppState } from "../types";
import {
  loginSuccess,
  logout,
  //showSelection
} from "../redux/actions";

import "../scss/header.scss";

export const Header = () => {
  const user = useSelector((state: AppState) => state.user);
  const amountSelected = user.borrowedRecords.length;

  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

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

  const handleLogout = () => {
    dispatch(logout(history));
    localStorage.removeItem("token");
  };

  const handleSelectionClick = () => {
    //dispatch(showSelection(user.borrowedRecords))
  };

  return (
    <header>
      {!user.name ? (
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
      ) : (
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
      )}
    </header>
  );
};
