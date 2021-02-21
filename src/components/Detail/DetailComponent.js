import React from "react";
import LayoutComponent from "../Layout/LayoutComponent";

function DetailComponent({ movie }) {
  return (
    <>
      {movie && (
        <LayoutComponent>
          <div>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
            <h1>{movie.title}</h1>
            <h3>{movie.original_title}</h3>
            <span>{movie.release_date}</span>
            <p>{movie.overview}</p>
          </div>
        </LayoutComponent>
      )}
    </>
  );
}

export default DetailComponent;
