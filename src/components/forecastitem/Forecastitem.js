import React, { useState } from "react";
import classes from "./Forecastitem.module.css";
import sun from "../../assets/sun1.jpg";
import cloud from "../../assets/cloud1.jpg";
import rain from "../../assets/rain1.jpg";
import { useSelector } from "react-redux";

const Forecastitem = () => {
  const data2 = useSelector((state) => state.weather);
  const extractedObjects = data2.item.slice(0, data2.count);
  const dayNames = ["Today", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  return (
    <div className={classes.forecastcontainer}>
      <div className={classes.forecastheading}>
        <h3>Next {data2.count}-Day Forecast</h3>
      </div>
      <div className={classes.overall}>
        <div className={classes.one}>
          {extractedObjects.map((i, index) => {
            return <span>{dayNames[index]}</span>;
          })}
        </div>
        <div className={classes.two}>
          {extractedObjects.map((i, index) => {
            return (
              <div>
                {i.main === "Rain" ? (
                  <img src={rain} alt="" />
                ) : i.main === "Clouds" ? (
                  <img src={cloud} alt="" />
                ) : (
                  <img src={sun} alt="" />
                )}
              </div>
            );
          })}
        </div>
        <div className={classes.three}>
          {extractedObjects.map((i, index) => {
            return <span>{i.main}</span>;
          })}
        </div>
        <div className={classes.four}>
          {extractedObjects.map((i, index) => {
            return <span>{Math.round(i.temperature - 273.15)}&#176;</span>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Forecastitem;
