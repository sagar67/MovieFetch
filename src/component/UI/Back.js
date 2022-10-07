import React from "react";
import { useHistory } from "react-router-dom";
import classes from "./Back.module.css";
import Button from "./Button";

const Back = () => {
  const history = useHistory();

  return (
    <div className={classes.back}>
        <Button onClick={() => history.goBack()}>Back</Button>
    </div>
  );
};

export default Back;
