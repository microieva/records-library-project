import {
  GET_USER,
  User,
  UserActions,
  REMOVE_RECORD,
  BORROW_RECORD,
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

export function borrowRecord(recordId: string): UserActions {
  return {
    type: BORROW_RECORD,
    payload: recordId,
  };
}

export function removeRecord(recordId: string): UserActions {
  return {
    type: REMOVE_RECORD,
    payload: recordId,
  };
}
