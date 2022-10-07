import "./App.css";
import Auth from "./component/Auth";
import { useSelector } from "react-redux";
import MoviesFetch from "./component/Movies/MoviesFetch";
import { Redirect, Route, Switch } from "react-router-dom";
// import SingleMovieDetail from "./component/Movies/SingleMovieDetail";
import MovieDetails from "./component/Movies/MovieDetails";
// import MovieDetails from "./component/Movies/MovieDetails";

function App() {

  const isAuth = useSelector((state) => state.isAuth.isAuthenticated);

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Redirect to="/login" />
        </Route>
        <Route path="/login">
          <Auth />
        </Route>
        {isAuth && (
          <Route path="/moviesfetch" exact>
            <MoviesFetch />
          </Route>
        )}
        {isAuth && (
          <Route path="/moviesfetch/:movieId">
            <MovieDetails />
          </Route>
        )}
        <Route path="*">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;