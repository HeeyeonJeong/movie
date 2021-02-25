export const setGenre = (selectGenres) => {
  localStorage.setItem("genre", JSON.stringify(selectGenres));
};

export const getGenre = JSON.parse(localStorage.getItem("genre"));
