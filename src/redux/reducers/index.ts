import { combineReducers } from "redux";

import records from "./records";
import auth from "./authentication";
//import users from './users'
//import cart from './cart'
//import ui from './ui'

const createRootReducer = () =>
  combineReducers({
    records,
    auth,
    //users
    //cart,
    //ui
  });
export default createRootReducer;
