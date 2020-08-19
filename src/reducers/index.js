import { combineReducers } from "redux";
import menuStatus from "./menu";
import dataFetch from "./dataFetch";

const reducer = combineReducers({
  menuStatus,
  dataFetch,
});

export default reducer;
