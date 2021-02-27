import React from "react";
import MyComponent from "../components/My/MyComponent";

function MyContainer() {
  const likeMovies = JSON.parse(localStorage.getItem("liked"));

  return <MyComponent likeMovies={likeMovies} />;
}

export default MyContainer;
