/* eslint-disable require-yield */
import { takeLatest } from "redux-saga/effects";
import { LoginSuccessAction, Logout } from "../actions";

function* googleLogin(action: LoginSuccessAction) {
  const token = action.payload.loginResponse.token;
  const history = action.payload.history;

  try {
    localStorage.setItem("token", token);
    history.push("/");
  } catch (error) {}
}

function* logout(action: Logout) {
  const history = action.payload;
  try {
    history.push("/login");
  } catch (error) {}
}

const watcher = [
  takeLatest("LOGIN_SUCCESS", googleLogin),
  takeLatest("LOGOUT", logout),
];

export default watcher;
