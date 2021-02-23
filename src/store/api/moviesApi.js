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

export const getSimilarMovies = async (movie_id) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movie_id}/similar`,
    {
      params: {
        api_key: apiKey,
        language: "ko",
      },
    }
  );
  return response.data.results;
};

export const getUserSelect = async (movie_id) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movie_id}?`,
    {
      params: {
        api_key: apiKey,
        language: "ko",
      },
    }
  );
  return response.data;
};

export const getGenreList = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/genre/movie/list?`,
    {
      params: {
        api_key: apiKey,
        language: "ko",
      },
    }
  );
  return response.data;
};
