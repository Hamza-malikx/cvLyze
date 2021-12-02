import {
  GET_CANDIDATE_RESULTS_REQUEST,
  GET_CANDIDATE_RESULTS_SUCCESS,
  GET_CANDIDATE_RESULTS_FAILURE,
} from "./getCandidateResultsType";
const initialState = {
  loading: false,
  candidateResults: [],
  error: "",
};
const getCandidateResultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CANDIDATE_RESULTS_REQUEST:
      return {
        ...state,
        loading: action.loading,
        error: "",
      };
    case GET_CANDIDATE_RESULTS_SUCCESS:
      return {
        candidateResults: action.payload,
        loading: action.loading,
        error: "",
      };
    case GET_CANDIDATE_RESULTS_FAILURE:
      return {
        candidateResults: [],
        loading: action.loading,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default getCandidateResultsReducer;
