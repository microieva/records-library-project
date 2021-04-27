import {
  UserState,
  UserActions,
  BORROW_RECORD,
  REMOVE_RECORD,
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
    const adminEmail = "ieva.vyliaudaite@integrify.io";
    const admin = true;
    console.log("DATA", userData);
    if (userData.email === adminEmail) {
      return {
        ...userData,
        isAdmin: admin,
      };
    }
    return {
      ...userData,
      borrowedRecords: state.borrowedRecords.concat(
        userData.borrowedRecords.filter(
          (item) => state.borrowedRecords.indexOf(item) < 0
        )
      ),
    };

  case BORROW_RECORD: {
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
  case REMOVE_RECORD: {
    const { borrowedRecords } = state;
    const recordId = action.payload;
    return {
      ...state,
      borrowedRecords: borrowedRecords.filter((id) => id !== recordId),
    };
  }
  case LOGOUT:
    return {
      ...state,
    };
  default:
    return state;
  }
}
