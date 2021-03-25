import { combineReducers } from "redux";

import records from "./records";
import auth from "./authentication";
import user from "./user";
//import cart from './cart'
//import ui from './ui'

const createRootReducer = () =>
  combineReducers({
    records,
    auth,
    user,
    //cart,
    //ui
  });
export default createRootReducer;
