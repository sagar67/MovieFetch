import React, { useEffect, useState } from "react";
import Back from "../UI/Back";
import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";
import classes from "./MoviesFetch.module.css";

const MoviesFetch = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const user = useSelector((state) => state.isAuth.username);
  
  useEffect(() => {
    setIsLoading(true);
    fetch("https://reactnative.dev/movies.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const fetchedMovies = data.movies.map((movieData) => {
          return {
            id: movieData.id,
            title: movieData.title,
            releaseYear: movieData.releaseYear,
          };
        });
        setMovies(fetchedMovies);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <div>
        <h3 className={classes.user}>UserId: {user}</h3>
        <Back />
      </div>
      <MoviesList movies={movies} />
    </div>
  );
};

export default MoviesFetch;