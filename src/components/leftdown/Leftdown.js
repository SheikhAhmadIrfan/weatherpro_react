import classes from "./Leftdown.module.css";
import sun from "../../assets/sun1.jpg";
import cloud from "../../assets/cloud1.jpg";
import rain from "../../assets/rain1.jpg";
import { useSelector } from "react-redux";

const Leftdown = () => {
  const data2 = useSelector((state) => state.forecast.item);
  const { list } = data2 || {};
  const main1 = list?.[0]?.weather?.[0]?.main;
  const main2 = list?.[1]?.weather?.[0]?.main;
  const main3 = list?.[2]?.weather?.[0]?.main;
  const temperature1 = list?.[0]?.main?.temp;
  const temperature1Celsius = Math.round(temperature1 - 273.15);
  const temperature2 = list?.[1]?.main?.temp;
  const temperature2Celsius = Math.round(temperature2 - 273.15);
  const temperature3 = list?.[2]?.main?.temp;
  const temperature3Celsius = Math.round(temperature3 - 273.15);
  return (
    <div className={classes.downcontainer}>
      <div className={classes.downheading}>
        <h4>7-Day Forecast</h4>
      </div>
      <div className={classes.overall}>
        <div className={classes.one}>
          <span>Today</span>
          <span>Tue</span>
          <span>Wed</span>
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
        </div>
        <div className={classes.three}>
          <span>{main1}</span>
          <span>{main2}</span>
          <span>{main3}</span>
        </div>
        <div className={classes.four}>
          <span>{temperature1Celsius}/22</span>
          <span>{temperature2Celsius}/23</span>
          <span>{temperature3Celsius}/25</span>
        </div>
      </div>
    </div>
  );
};
export default Leftdown;
