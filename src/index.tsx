import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
//import { createBrowserHistory } from "history";

import App from "./App";
import makeStore from "./redux/store";
//import { logout } from "./redux/actions";
import "./index.css";

const store = makeStore();
//const history = createBrowserHistory();

// there are 2 types of interceptors, req & res
// req: everytime you send a request from your app using axios,
//your req will not go straight to the server, it will go thru
//this interceptor first. Inthis case we are using req interceptor, to attach the token.
axios.interceptors.request.use(function (request) {
  const token = localStorage.getItem("token");
  //const cookieToken = document.cookie.split('=')[1]

  if (token) {
    request.headers["Authorization"] = `Bearer ${token}`;
  }
  /*else {
    config.headers['Authorization'] = `Bearer ${cookieToken}`
  }*/
  return request;
});

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      //store.dispatch(logout(history)); throws typescript error
    }
    return Promise.reject(error);
  }
);

axios.defaults.baseURL = "http://localhost:3001/api/v1";

const WithProvider = () => (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

ReactDOM.render(<WithProvider />, document.getElementById("root"));
