import axios from "axios";

export const TREND_MOVIE_URL = `https://api.themoviedb.org/3/trending/movie/week`;
export const apiKey = process.env.REACT_APP_API_KEY;

export const getTrendMovies = (page = 1) => {
  const reponse = axios.get(TREND_MOVIE_URL, {
    params: {
      api_key: apiKey,
      page,
      language: "ko",
    },
  });
  return reponse.data;
};
