import { reducerUtils } from "../../lib/reducerUtils";

export const initialState = {
  trendMovies: reducerUtils.initial(),
  similarMovies: reducerUtils.initial(),
  useSelectMovie: reducerUtils.initial(),
};
