import {
  UserState,
  UserActions,
  ADD_RECORD,
  LOGIN_SUCCESS,
  LOGOUT,
} from "../../types";

export default function user(
  state: UserState = {
    name: "",
    email: "",
    borrowedRecords: [],
    isAdmin: false,
  },
  action: UserActions
): UserState {
  switch (action.type) {
  // case GET_USER: {
  //   return {
  //     //...state,
  //     action.payload.user,
  //   };
  // }
  case LOGIN_SUCCESS:
    const userData = action.payload.loginResponse.user;
    console.log("DATA", userData);
    return {
      ...userData,
      borrowedRecords: state.borrowedRecords.concat(
        userData.borrowedRecords.filter(
          (item) => state.borrowedRecords.indexOf(item) < 0
        )
      ),
    };
  case LOGOUT:
    return {
      ...state,
    };
  case ADD_RECORD: {
    const { borrowedRecords } = state;
    const recordId = action.payload;
    if (borrowedRecords.find((recId) => recId === recordId)) {
      return { ...state };
    }
    return {
      ...state,
      borrowedRecords: [...borrowedRecords, recordId],
    };
  }

  default:
    return state;
  }
}
