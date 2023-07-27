import classes from "./Today.module.css";
import sun from "../../assets/sun1.jpg";
import { useSelector } from "react-redux";
import cloud from "../../assets/cloud1.jpg";
import rain from "../../assets/rain1.jpg";

const Today = () => {
  const data1 = useSelector((state) => state.forecast.item);
  const { list } = data1 || {};
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
    <div className={classes.todaycontainer}>
      <div className={classes.todaymain1}>
        <span style={{ color: "black" }}>Today Forecast</span>
      </div>
      <div className={classes.todaycontent}>
        <div className={classes.todaymain}>
          <span>6:00 AM</span>
          {temperature1Celsius < 20 ? (
              <img src={rain} alt="" />
            ) : temperature1Celsius > 20 && temperature1Celsius < 30 ? (
              <img src={cloud} alt="" />
            ) : (
              <img src={sun} alt="" />
            )}
          <span>{temperature1Celsius}&#176;</span>
        </div>
        <div className={classes.todaymain}>
          <span>9:00 AM</span>
          {temperature2Celsius < 20 ? (
              <img src={rain} alt="" />
            ) : temperature2Celsius > 20 && temperature2Celsius < 30 ? (
              <img src={cloud} alt="" />
            ) : (
              <img src={sun} alt="" />
            )}
          <span>{temperature2Celsius}&#176;</span>
        </div>
        <div className={classes.todaymain}>
          <span>12:00 PM</span>
          {temperature3Celsius < 20 ? (
              <img src={rain} alt="" />
            ) : temperature3Celsius > 20 && temperature3Celsius < 30 ? (
              <img src={cloud} alt="" />
            ) : (
              <img src={sun} alt="" />
            )}
          <span>{temperature3Celsius}&#176;</span>
        </div>
        <div className={classes.todaymain}>
          <span>3:00 PM</span>
          {temperature4Celsius < 20 ? (
              <img src={rain} alt="" />
            ) : temperature4Celsius > 20 && temperature4Celsius < 30 ? (
              <img src={cloud} alt="" />
            ) : (
              <img src={sun} alt="" />
            )}
          <span>{temperature4Celsius}&#176;</span>
        </div>
        <div className={classes.todaymain}>
          <span>6:00 PM</span>
          {temperature5Celsius < 20 ? (
              <img src={rain} alt="" />
            ) : temperature5Celsius > 20 && temperature5Celsius < 30 ? (
              <img src={cloud} alt="" />
            ) : (
              <img src={sun} alt="" />
            )}
          <span>{temperature5Celsius}&#176;</span>
        </div>
        <div className={classes.todaymain}>
          <span>9:00 PM</span>
          {temperature6Celsius < 20 ? (
              <img src={rain} alt="" />
            ) : temperature6Celsius > 20 && temperature6Celsius < 30 ? (
              <img src={cloud} alt="" />
            ) : (
              <img src={sun} alt="" />
            )}
          <span>{temperature6Celsius}&#176;</span>
        </div>
      </div>
    </div>
  );
};
export default Today;
