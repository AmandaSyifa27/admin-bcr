import { combineReducers } from "redux";
import searchCars from "./searchCarSlice.js";

const rootReducer = combineReducers({
  searchCars,
});

export default rootReducer;
