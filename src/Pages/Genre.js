import React from "react";
import LayoutComponent from "../components/Layout/LayoutComponent";
import GenreListContainer from "../containers/GenreListContainer";
import GenreMovieContainer from "../containers/GenreMoviesContainer";

function GenrePage() {
  return (
    <LayoutComponent>
      <main>
        <GenreListContainer />
        <GenreMovieContainer />
      </main>
    </LayoutComponent>
  );
}

export default GenrePage;
