import { combineReducers } from "redux";
import ActivitiesReducer from "./activitiesReducer";


export default combineReducers({
  ActivitiesReducer,
});

export type rootReducer = ReturnType<typeof combineReducers>;
