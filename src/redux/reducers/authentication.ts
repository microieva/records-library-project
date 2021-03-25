//import { ActionTypes } from '../actions'
import { LoginSuccessAction } from "../actions";
import { UserState } from "../../types";

// export type AuthenticationState = {
//   user: {};
// };

// const initialState: AuthenticationState = {
//   user: {},
// };

const initialState: UserState = {
  user: {
    //_id: "",
    name: "",
    email: "",
    borrowedRecords: [],
    isAdmin: false,
  },
};

const reducer = (
  state = initialState,
  action: LoginSuccessAction
): UserState => {
  switch (action.type) {
  case "LOGIN_SUCCESS":
    const userData = action.payload.loginResponse.user;
    //console.log("reducers/authentication.ts: ", userData);
    return { user: userData };
  default:
    return state;
  }
};

export default reducer;
