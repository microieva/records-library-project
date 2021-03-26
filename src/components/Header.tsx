import React from "react";
//import { Link } from "react-router-dom";
import GoogleLogin from "react-google-login";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import Badge from "@material-ui/core/Badge";

import { AppState } from "../types";
import { loginSuccess, logout } from "../redux/actions";

import "../scss/header.scss";

export const Header = () => {
  const user = useSelector((state: AppState) => state.user.user);
  const amountSelected = user.borrowedRecords.length;
  //console.log("user from HEADER", user);
  const dispatch = useDispatch();
  const history = useHistory();

  const responseGoogle = async (response: any) => {
    const res = await axios.post("/users/google/login", {
      id_token: response.tokenObj.id_token,
    });

    //console.log("res from HEADER", res);
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

  return (
    <header>
      {!user.name ? (
        <nav>
          <h1>Welcome to My Records!</h1>
          <div className="btn-group">
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

            <button className="btn">Selection</button>
          </div>
        </nav>
      ) : (
        <nav>
          <h1>Welcome {user.name}!</h1>
          <div className="btn-group">
            <button className="btn" onClick={handleLogout}>
              Sign Out
            </button>
            <Badge badgeContent={amountSelected} color="secondary">
              <button className="btn">Selection</button>
            </Badge>
          </div>
        </nav>
      )}
    </header>
  );
};
