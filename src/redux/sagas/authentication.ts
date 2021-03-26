/* eslint-disable require-yield */
import { takeLatest } from "redux-saga/effects";
import {
  LoginSuccessAction,
  LogoutAction,
  LOGIN_SUCCESS,
  LOGOUT,
} from "../../types";

function* googleLogin(action: LoginSuccessAction) {
  const token = action.payload.loginResponse.token;
  const history = action.payload.history;

  try {
    localStorage.setItem("token", token);
    history.push("/");
  } catch (error) {}
}

function* logout(action: LogoutAction) {
  const history = action.payload;
  try {
    history.push("/");
  } catch (error) {}
}

const watcher = [
  takeLatest(LOGIN_SUCCESS, googleLogin),
  takeLatest(LOGOUT, logout),
];

export default watcher;
