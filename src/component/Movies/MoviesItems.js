import React from "react";
import { Link } from "react-router-dom";
import Card from "../UI/Card";
import Button from "../UI/Button";

function MoviesItems(props) {

  return (
    <Card>
      <div>
        <h3>{props.title}</h3>
        <h4>{props.releaseYear}</h4>
      </div>
      <div>
        <Link to={`/moviesfetch/${props.id}`}>
          <Button>View</Button>
        </Link>
      </div>
    </Card>
  );
}

export default MoviesItems;