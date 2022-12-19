import { combineReducers } from "redux";
import LoadingReducer from "./loadingReducer";

export default combineReducers({
  LoadingReducer,
});

export type rootReducer = ReturnType<typeof combineReducers>;
