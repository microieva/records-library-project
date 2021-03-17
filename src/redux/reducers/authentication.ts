//import { ActionTypes } from '../actions'
//import { LoginSuccessAction } from '../actions'

export type AuthenticationState = {
  user: any;
};

const initialState: AuthenticationState = {
  user: {},
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
  case "LOGIN_SUCCESS":
    const userData = action.payload.user;
    return { user: userData };
  default:
    return state;
  }
};

export default reducer;
