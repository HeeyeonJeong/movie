import * as homeAPI from "../api/home";
import { initialState } from "./initialState";
import { createPromiseThunk } from "../../lib/createPromiseThunk.js";
import { handleAsyncActions } from "../../lib/handleAsyncActions";

const GET_TREND_MOVIES = "home/GET_TREND_MOVIES";
const GET_TREND_MOVIES_SUCCESS = "home/GET_TREND_MOVIES_SUCCESS";
const GET_TREND_MOVIES_ERROR = "home/GET_TREND_MOVIES_ERROR";

export const getTrendMovies = createPromiseThunk(
  GET_TREND_MOVIES,
  homeAPI.getTrendMovies
);

const getTrendMoviesReducer = handleAsyncActions(
  GET_TREND_MOVIES,
  "trendMovies"
);

export default function home(state = initialState, action) {
  switch (action.type) {
    case GET_TREND_MOVIES:
    case GET_TREND_MOVIES_SUCCESS:
    case GET_TREND_MOVIES_ERROR:
      return getTrendMoviesReducer(state, action);
    default:
      return state;
  }
}
