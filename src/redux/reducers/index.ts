import { combineReducers } from "redux";

import records from "./records";
import user from "./user";
//import ui from './ui'

//const user = combineReducers({userAuth, userUser})

const createRootReducer = () =>
  combineReducers({
    records,
    user,
  });
export default createRootReducer;
