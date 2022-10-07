import React, { useEffect, useState } from "react";
import Back from "../UI/Back";
import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";
import classes from "./MoviesFetch.module.css";

const MoviesFetch = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const user = useSelector((state) => state.isAuth.username);
  //   console.log(user);

  //   const fetchMovies = () => {

  //       fetch('https://reactnative.dev/movies.json');
  //       setIsLoading(true);
  //       console.log('fetching')
  //       if (!response.ok) {
  //           throw new Error('Something went wrong!');
  //         }

  //         const data = await response.json();

  //         const fetchedMovies = data.results.map((movieData) => {
  //             return {
  //                 id: movieData.episode_id,
  //                 title: movieData.title,
  //                 openingText: movieData.opening_crawl,
  //                 releaseDate: movieData.release_date,
  //             };
  //         });
  //         setMovies(fetchedMovies)
  //         setIsLoading(false);
  //         console.log('fetching');
  //     }

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
        console.log("*** moviesFetch useEffect fetchedMovies");
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