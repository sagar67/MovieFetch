import React, { useState } from "react";
import { authActions } from "../store/auth";
import classes from "./Auth.module.css";
// import MoviesList from "./Movies/MoviesList";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Auth = () => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  // const [movies,setMovies] = useState([]);

  const dispatch = useDispatch();
  // const isAuth = useSelector(state => state.isAuth.isAuthenticated)

  const usernameHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const passwordHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    setEnteredUsername("");
    setEnteredPassword("");
  };

  const loginHandler = () => {
    if (
      // enteredPassword.trim().length === 0 ||
      enteredPassword.trim().length < 6
      // !enteredPassword.trim().includes('')
    ) {
      return alert("Password should be more than 6");
    }
    if (
      // enteredUsername.trim().length === 0 ||
      enteredUsername.trim().length < 10
    ) {
      return alert("Entered less than 10 digits number");
    }

    dispatch(authActions.isLogin());
    // console.log(enteredUsername, enteredPassword);

    // fetch('https://reactnative.dev/movies.json').then(response => {
    //     return response.json();
    //   }).then(data => {
    //     const fetchedMovies = data.movies.map((movieData) => {
    //         return {
    //             id: movieData.id,
    //             title: movieData.title,
    //             releaseYear: movieData.releaseYear
    //         };
    //     });
    //     setMovies(fetchedMovies);
    //     console.log('fetched')
    //   })
  dispatch(authActions.username(enteredUsername))
  };

  return (
    <main className={classes.auth}>
      <h1>Login</h1>
      <section>
        <form onSubmit={onSubmitHandler}>
          <div className={classes.control}>
            <label htmlFor="mobile">Enter Username(Mobile No.)</label>
          </div>
          <select>
            <option>+91</option>
          </select>
          <input
            type="tel"
            id="mobile"
            placeholder="Enter 10 digit no."
            value={enteredUsername}
            onChange={usernameHandler}
          />
          <div className={classes.control}>
            <label htmlFor="enterpassword">Password</label>
            <input
              id="enterpassword"
              type="password"
              placeholder="Enter password of more than 6 words"
              value={enteredPassword}
              onChange={passwordHandler}
            />
          </div>
          <div>
            <Link to="/moviesfetch">
              <button type="submit" onClick={loginHandler}>
                Login
              </button>
            </Link>
          </div>
        </form>
        {/* <MoviesList movies={movies}/> */}
      </section>
    </main>
  );
};

export default Auth;