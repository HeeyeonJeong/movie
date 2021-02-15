import axios from "axios";

export const TREND_MOVIE_URL = `https://api.themoviedb.org/3/trending/movie/week`;
export const apiKey = process.env.REACT_APP_API_KEY;

export const getTrendMovies = async () => {
  const response = await axios.get(TREND_MOVIE_URL, {
    params: {
      api_key: apiKey,
      language: "ko",
    },
  });
  return response.data.results;
};
