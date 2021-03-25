import { combineReducers } from "redux";

import records from "./records";
import user from "./authentication";
//import user from "./user";
//import cart from './cart'
//import ui from './ui'

const createRootReducer = () =>
  combineReducers({
    records,
    user,
    //user,
    //cart,
    //ui
  });
export default createRootReducer;
