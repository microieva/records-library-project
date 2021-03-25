//import { Dispatch } from "redux";
import { GET_USER, GetUserAction, User } from "../../types";

export function getUser(user: User): GetUserAction {
  return {
    type: GET_USER,
    payload: {
      user,
    },
  };
}

/*export function fetchUser() {
  //const user = localStorage.getItem('token')
  //dispatch(getUser(user));
  return async (dispatch: Dispatch) => {
    try {
      //const response = await fetch("http://localhost:3001/api/v1/users");
      const response = await fetch("")
      const data = await response.json();
      dispatch(getUser(data));
    } catch (e) {
      console.log("ERROR______", e);
    }
  };
}*/
