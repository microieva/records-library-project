import { LoginResponse, LOGIN_SUCCESS, LOGOUT } from "../../types";

export const loginSuccess = (loginResponse: LoginResponse, history: any) => {
  return {
    type: LOGIN_SUCCESS,
    payload: { loginResponse, history },
  };
};

export const logout = (history: any) => {
  return {
    type: LOGOUT,
    payload: history,
  };
};
