import React from "react";
import classes from "./Loader.module.css";

function Loader() {
  return (
    <div className={classes.modal}>
      <div className={classes.loader}></div>
    </div>
  );
}

export default Loader;
