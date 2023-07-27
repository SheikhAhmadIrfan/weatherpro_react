import React from "react";
import classes from "./Forecast.module.css";
import sun from "../../assets/sun1.jpg";
import cloud from "../../assets/cloud1.jpg";
import rain from "../../assets/rain1.jpg";
import { useSelector } from "react-redux";

const Forecast = () => {
  const data2 = useSelector((state) => state.forecast.item);
  const { list } = data2 || {};
  const main1 = list?.[0]?.weather?.[0]?.main;
  const main2 = list?.[1]?.weather?.[0]?.main;
  const main3 = list?.[2]?.weather?.[0]?.main;
  const main4 = list?.[3]?.weather?.[0]?.main;
  const main5 = list?.[4]?.weather?.[0]?.main;
  const main6 = list?.[5]?.weather?.[0]?.main;
  const main7 = list?.[6]?.weather?.[0]?.main;
  const temperature1 = list?.[0]?.main?.temp;
  const temperature1Celsius = Math.round(temperature1 - 273.15);
  const temperature2 = list?.[1]?.main?.temp;
  const temperature2Celsius = Math.round(temperature2 - 273.15);
  const temperature3 = list?.[2]?.main?.temp;
  const temperature3Celsius = Math.round(temperature3 - 273.15);
  const temperature4 = list?.[3]?.main?.temp;
  const temperature4Celsius = Math.round(temperature4 - 273.15);
  const temperature5 = list?.[4]?.main?.temp;
  const temperature5Celsius = Math.round(temperature5 - 273.15);
  const temperature6 = list?.[5]?.main?.temp;
  const temperature6Celsius = Math.round(temperature6 - 273.15);

  return (
    <div className={classes.forecastcontainer}>
      <div className={classes.forecastheading}>
        <h3>7-Day Forecast</h3>
      </div>
      <div className={classes.overall}>
        <div className={classes.one}>
          <span>Today</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fri</span>
          <span>Sat</span>
          <span>Sun</span>
        </div>
        <div className={classes.two}>
        {main1 === "Rain" ? (
              <img src={rain} alt="" />
            ) : main1 === "Clouds" ? (
              <img src={cloud} alt="" />
            ) : (
              <img src={sun} alt="" />
            )}
          {main2 === "Rain" ? (
              <img src={rain} alt="" />
            ) : main2 === "Clouds" ? (
              <img src={cloud} alt="" />
            ) : (
              <img src={sun} alt="" />
            )}
          {main3 === "Rain" ? (
              <img src={rain} alt="" />
            ) : main3 === "Clouds" ? (
              <img src={cloud} alt="" />
            ) : (
              <img src={sun} alt="" />
            )}
          {main4 === "Rain" ? (
              <img src={rain} alt="" />
            ) : main4 === "Clouds" ? (
              <img src={cloud} alt="" />
            ) : (
              <img src={sun} alt="" />
            )}
          {main5 === "Rain" ? (
              <img src={rain} alt="" />
            ) : main5 === "Clouds" ? (
              <img src={cloud} alt="" />
            ) : (
              <img src={sun} alt="" />
            )}
          {main6 === "Rain" ? (
              <img src={rain} alt="" />
            ) : main6 === "Clouds" ? (
              <img src={cloud} alt="" />
            ) : (
              <img src={sun} alt="" />
            )}
          {main7 === "Rain" ? (
              <img src={rain} alt="" />
            ) : main7 === "Clouds" ? (
              <img src={cloud} alt="" />
            ) : (
              <img src={sun} alt="" />
            )}
        </div>
        <div className={classes.three}>
          <span>{main1}</span>
          <span>{main2}</span>
          <span>{main3}</span>
          <span>{main4}</span>
          <span>{main5}</span>
          <span>{main6}</span>
          <span>{main7}</span>
        </div>
        <div className={classes.four}>
          <span>{temperature1Celsius}/22</span>
          <span>{temperature2Celsius}/23</span>
          <span>{temperature3Celsius}/25</span>
          <span>{temperature4Celsius}/28</span>
          <span>{temperature5Celsius}/21</span>
          <span>{temperature6Celsius}/28</span>
          <span>{temperature1Celsius}/24</span>
        </div>
      </div>
    </div>
  );
};

export default Forecast;
