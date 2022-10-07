import React from "react";
import MoviesItems from "./MoviesItems";

function MoviesList(props) {
  return (
    <div>
      <h2>Movies List</h2>
      <ul>
        {props.movies.map((movie) => {
          // console.log('*** MoviesList inside movie', movie)
          return (
            <MoviesItems
              key={movie.id}
              id={movie.id}
              title={movie.title}
              releaseYear={movie.releaseYear}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default MoviesList;
