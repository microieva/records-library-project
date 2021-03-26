import { combineReducers } from "redux";

import records from "./records";
import user from "./user";
import cart from "./selection-cart";
//import ui from './ui'

//const user = combineReducers({userAuth, userUser})

const createRootReducer = () =>
  combineReducers({
    records,
    user,
    //userAll
    cart,
    //ui
  });
export default createRootReducer;
