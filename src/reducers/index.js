import { combineReducers } from "redux";
import menuStatus from "./menu";
import dataFetch from "./dataFetch";
import modalHandle from "./modal";

const reducer = combineReducers({
  menuStatus,
  dataFetch,
  modalHandle,
});

export default reducer;
