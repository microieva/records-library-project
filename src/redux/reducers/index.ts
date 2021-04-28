import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import records from "./records";
import user from "./user";
import ui from "./ui";

const createRootReducer = () =>
  combineReducers({
    form: formReducer,
    records,
    user,
    ui,
  });
export default createRootReducer;
