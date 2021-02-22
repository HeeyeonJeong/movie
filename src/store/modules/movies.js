import * as movieAPI from "../api/moviesApi";
import { initialState } from "./initialState";
import { createPromiseThunk } from "../../lib/createPromiseThunk.js.js";
import { handleAsyncActions } from "../../lib/handleAsyncActions";

const GET_TREND_MOVIES = "home/GET_TREND_MOVIES";
const GET_TREND_MOVIES_SUCCESS = "home/GET_TREND_MOVIES_SUCCESS";
const GET_TREND_MOVIES_ERROR = "home/GET_TREND_MOVIES_ERROR";

const GET_SIMILAR_MOVIES = "similar/GET_SIMILAR_MOVIES";
const GET_SIMILAR_MOVIES_SUCCESS = "similar/GET_SIMILAR_MOVIES_SUCCESS";
const GET_SIMILAR_MOVIES_ERROR = "similar/GET_SIMILAR_MOVIES_ERROR";

const GET_USER_SELECT = "user/GET_USER_SELECT";
const GET_USER_SELECT_SUCCESS = "user/GET_USER_SELECT_SUCCESS";
const GET_USER_SELECT_ERROR = "user/GET_USER_SELECT_ERROR";

export const getTrendMovies = createPromiseThunk(
  GET_TREND_MOVIES,
  movieAPI.getTrendMovies
);

export const getSimilarMovies = createPromiseThunk(
  GET_SIMILAR_MOVIES,
  movieAPI.getSimilarMovies
);

export const getUserSelect = createPromiseThunk(
  GET_USER_SELECT,
  movieAPI.getUserSelect
);

const getTrendMoviesReducer = handleAsyncActions(
  GET_TREND_MOVIES,
  "trendMovies"
);

const getSimilarMoviesReducer = handleAsyncActions(
  GET_SIMILAR_MOVIES,
  "similarMovies"
);

const getUserSelectReducer = handleAsyncActions(
  GET_USER_SELECT,
  "useSelectMovie"
);

export default function home(state = initialState, action) {
  switch (action.type) {
    case GET_TREND_MOVIES:
    case GET_TREND_MOVIES_SUCCESS:
    case GET_TREND_MOVIES_ERROR:
      return getTrendMoviesReducer(state, action);

    case GET_SIMILAR_MOVIES:
    case GET_SIMILAR_MOVIES_SUCCESS:
    case GET_SIMILAR_MOVIES_ERROR:
      return getSimilarMoviesReducer(state, action);

    case GET_USER_SELECT:
    case GET_USER_SELECT_SUCCESS:
    case GET_USER_SELECT_ERROR:
      return getUserSelectReducer(state, action);

    default:
      return state;
  }
}
