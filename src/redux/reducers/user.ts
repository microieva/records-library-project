import { UserState, UserActions, GET_USER } from "../../types";

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
    return { ...state, user: action.payload.user };
  }

  default:
    return state;
  }
}
