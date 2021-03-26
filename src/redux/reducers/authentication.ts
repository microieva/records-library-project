import { UserState, UserActions, LOGIN_SUCCESS, LOGOUT } from "../../types";
//import { UserState } from '../../types'

// export type AuthenticationState = {
//   user: {};
// };

// const initialState: AuthenticationState = {
//   user: {},
// };

const initialState: UserState = {
  user: {
    name: "",
    email: "",
    borrowedRecords: [],
    isAdmin: false,
  },
};

const reducer = (state = initialState, action: UserActions): UserState => {
  switch (action.type) {
  case LOGIN_SUCCESS:
    const userData = action.payload.loginResponse.user;
    console.log("DATA", userData);
    return { user: userData };
  case LOGOUT:
    return { ...initialState };
  default:
    return state;
  }
};

export default reducer;
