import getTrendMovies from "../api/home";
import { createPromiseThunk } from "../../lib/createPromiseThunk.js";

const GET_TREND_MOVIES = "home/GET_TREND_MOVIES";
const GET_TREND_MOVIES_SUCCESS = "home/GET_TREND_MOVIES_SUCCESS";
const GET_TREND_MOVIES_ERROR = "home/GET_TREND_MOVIES_ERROR";

export const getTrendMovies = createPromiseThunk(
  GET_TREND_MOVIES,
  getTrendMovies
);
