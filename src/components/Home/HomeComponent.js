import React from "react";

function HomeComponent({ trendMovie }) {
  return (
    <>
      {trendMovie && (
        <div>
          <h1>{trendMovie.title}</h1>
          <img
            src={`https://image.tmdb.org/t/p/original/${trendMovie.backdrop_path}`}
            alt={trendMovie.title}
          />
        </div>
      )}
    </>
  );
}

export default HomeComponent;
