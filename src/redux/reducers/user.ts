import {
  UserState,
  UserActions,
  GET_USER,
  UPDATE_BORROWED_RECORDS,
  LOGIN_SUCCESS,
  LOGOUT,
} from "../../types";

export default function user(
  state: UserState = {
    user: {
      name: "",
      email: "",
      borrowedRecords: [],
      isAdmin: false,
    },
  },
  action: UserActions
): UserState {
  switch (action.type) {
  case GET_USER: {
    return {
      ...state,
      user: action.payload.user,
    };
  }
  case LOGIN_SUCCESS:
    const userData = action.payload.loginResponse.user;
    console.log("DATA", userData);
    return { user: userData };
  case LOGOUT:
    return { ...state };
  case UPDATE_BORROWED_RECORDS: {
    return {
      ...state,
      //state.user.borrowedRecords: [...state.user.borrowedRecords, ...action.payload]
      //return combined arrays user.borrowedRecords + action.payload
    };
  }

  default:
    return state;
  }
}
