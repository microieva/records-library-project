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

    if (userData.email === adminEmail) {
      userData.isAdmin = admin;
    }

    console.log("DATA", userData);
    return {
      ...userData,
      borrowedRecords: state.borrowedRecords.concat(
        userData.borrowedRecords.filter(
          (item) => state.borrowedRecords.indexOf(item) < 0
        )
      ),
      isAdmin: admin,
    };
  case LOGOUT:
    return {
      ...state,
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
  default:
    return state;
  }
}
