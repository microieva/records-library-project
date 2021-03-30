//import { Dispatch } from "redux";
import {
  GET_USER,
  User,
  UserActions,
  //UPDATE_BORROWED_RECORDS,
  ADD_RECORD,
  LoginResponse,
  LOGIN_SUCCESS,
  LOGOUT,
} from "../../types";

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

export function getUser(user: User): UserActions {
  return {
    type: GET_USER,
    payload: {
      user,
    },
  };
}

/*export function updateBorrowedRecords(recordId: string): UserActions {
  return {
    type: UPDATE_BORROWED_RECORDS,
    payload: recordId,
  };
}*/

export function addRecord(recordId: string): UserActions {
  return {
    type: ADD_RECORD,
    payload: recordId,
  };
}

/*export function fetchUser() {
  //const user = localStorage.getItem('token')
  //dispatch(getUser(user));
  return async (dispatch: Dispatch) => {
    try {
      //const response = await fetch("http://localhost:3001/api/v1/users");
      const response = await fetch("")
      const data = await response.json();
      dispatch(getUser(data));
    } catch (e) {
      console.log("ERROR______", e);
    }
  };
}*/
