import { combineReducers } from "redux";
import movies from "./movies";

//rootReducer
const rootReducer = combineReducers({
  movies,
});

export default rootReducer;
