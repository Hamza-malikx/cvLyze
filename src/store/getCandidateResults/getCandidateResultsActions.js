import axios from "axios";
import {
  GET_CANDIDATE_RESULTS_REQUEST,
  GET_CANDIDATE_RESULTS_SUCCESS,
  GET_CANDIDATE_RESULTS_FAILURE,
} from "./getCandidateResultsType";

const getCandidateResultsRequest = (data) => {
  return {
    type: GET_CANDIDATE_RESULTS_REQUEST,
    loading: true,
  };
};
const getCandidateResultsSuccess = (candidateResults) => {
  return {
    type: GET_CANDIDATE_RESULTS_SUCCESS,
    payload: candidateResults,
    loading: false,
  };
};
const getCandidateResultsFailure = (error) => {
  return {
    type: GET_CANDIDATE_RESULTS_FAILURE,
    payload: error,
    loading: false,
  };
};
const getCandidateResults = (file, history) => {
  let loading = true;
  return async (dispatch) => {
    try {
      var form = new FormData();
      form.append("file", file);
      const config = {
        headers: {
          "Access-Control-Allow-Origin": "",
          Allow: "POST",
          "Content-Type": "multipart/form-data",
        },
      };
      dispatch(getCandidateResultsRequest(loading));
      console.log("FFFFFFFFFFF", loading);
      const api = "https://cvlyze-api.herokuapp.com/resume-analysis/";
      var res = await axios.post(api, form, config);
      console.log("ajhbas", res.data);
      loading = false;
      dispatch(getCandidateResultsSuccess(res, loading));
      history("/resume-report");
    } catch (error) {
      console.log("EEEEEEEEEEEE", error.message);
      loading = false;
      dispatch(getCandidateResultsFailure(error.message, loading));
    }
  };
};
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getCandidateResultsRequest,
  getCandidateResultsSuccess,
  getCandidateResultsFailure,
  getCandidateResults,
};
