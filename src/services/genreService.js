const USER_SELECT_GENRE = "genre";

export const setGenre = (selectGenres) => {
  localStorage.setItem(USER_SELECT_GENRE, JSON.stringify(selectGenres));
};

export const getGenre = JSON.parse(localStorage.getItem(USER_SELECT_GENRE));
