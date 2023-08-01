import React from "react";
import classes from './Notfound.module.css'
import { useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate();
  const handleFound = () => {
    navigate('/');
  };
  return (
    <div className={classes.container}>
      <h1 className={classes.heading}>Page Not Found</h1>
      <p className={classes.text}>The requested page does not exist.</p>
      <button className={classes.button} onClick={handleFound}>Go to Home</button>
    </div>
  );
};

export default NotFound;
