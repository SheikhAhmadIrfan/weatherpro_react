import classes from "./Leftmid.module.css";
import sun from "../../assets/sun1.jpg";
import cloud from "../../assets/cloud1.jpg";
import rain from "../../assets/rain1.jpg";
import { useSelector } from "react-redux";

const Leftmid = () => {
  const data1 = useSelector((state) => state.forecast.item);
  const { list } = data1 || {};
  const temperature1 = list?.[0]?.main?.temp;
  const temperature1Celsius = Math.round(temperature1 - 273.15);
  const temperature2 = list?.[1]?.main?.temp;
  const temperature2Celsius = Math.round(temperature2 - 273.15);
  const temperature3 = list?.[2]?.main?.temp;
  const temperature3Celsius = Math.round(temperature3 - 273.15);
  return (
    <div className={classes.midcontainer}>
      <div className={classes.midmain1}>
        <span style={{ color: "black" }}>Today Forecast</span>
      </div>
      <div className={classes.midcontent}>
        <div className={classes.midmain}>
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
        <div className={classes.midmain}>
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
        <div className={classes.midmain}>
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
      </div>
    </div>
  );
};
export default Leftmid;
