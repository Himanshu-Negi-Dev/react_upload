import counterReducer from "./counter";
import loggedReducer from "./islogged";
import { combineReducers } from "redux";

const allReducer = combineReducers({
   counterReducer: counterReducer,
   loggedReducer: loggedReducer,
});

export default allReducer;
