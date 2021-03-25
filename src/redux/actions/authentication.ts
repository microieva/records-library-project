type LoginResponse = {
  user: {
    email: string;
    name: string;
    isAdmin: boolean;
    //photo: string
    _id: string;
  };
  token: string;
};

export type LoginSuccessAction = {
  type: "LOGIN_SUCCESS";
  payload: { loginResponse: LoginResponse; history: any };
};

export const loginSuccess = (loginResponse: LoginResponse, history: any) => {
  return {
    type: "LOGIN_SUCCESS",
    payload: { loginResponse, history },
  };
};

export type Logout = {
  type: "LOGOUT";
  //payload here is history object?
  payload: any;
};

export const logout = (history: any) => {
  return {
    type: "LOGOUT",
    payload: history,
  };
};
