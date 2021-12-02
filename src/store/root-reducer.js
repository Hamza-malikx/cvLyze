import { combineReducers } from "redux";
import getCandidateResultsReducer from "./getCandidateResults/getCandidateResultsReducers";
const rootReducer = combineReducers({
  getCandidateResultsReducer,
});
export default rootReducer;
