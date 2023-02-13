import { combineReducers } from "redux";
import searchCars from "./searchCarSlicing.js";

const rootReducer = combineReducers({
  searchCars,
});

export default rootReducer;
