//import { ActionTypes } from '../actions'
import { LoginSuccessAction } from "../actions";
//import { UserState } from '../../types'

export type AuthenticationState = {
  user: {};
};

const initialState: AuthenticationState = {
  user: {},
};

const reducer = (
  state = initialState,
  action: LoginSuccessAction
): AuthenticationState => {
  switch (action.type) {
  case "LOGIN_SUCCESS":
    const userData = action.payload.loginResponse.user;
    console.log("DATA", userData);
    return { user: userData };
  default:
    return state;
  }
};

export default reducer;
