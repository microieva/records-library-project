import { combineReducers } from "redux";

import records from "./records";
//import users from './users'
//import cart from './cart'
//import ui from './ui'

const createRootReducer = () =>
  combineReducers({
    records,
    //users
    //cart,
    //ui
  });
export default createRootReducer;
