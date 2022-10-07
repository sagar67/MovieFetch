import React, { useState } from "react";
import { authActions } from "../store/auth";
import classes from "./Auth.module.css";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Auth = () => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const dispatch = useDispatch();

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
      enteredPassword.trim().length < 6
    ) {
      return alert("Password should be more than 6");
    }
    if (
      enteredUsername.trim().length < 10
    ) {
      return alert("Entered less than 10 digits number");
    }

  dispatch(authActions.isLogin());
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
      </section>
    </main>
  );
};

export default Auth;