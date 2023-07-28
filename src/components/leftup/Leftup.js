import classes from "./Leftup.module.css";
import sun from "../../assets/sun1.jpg";
import cloud from "../../assets/cloud1.jpg";
import rain from "../../assets/rain1.jpg";
import { useSelector } from "react-redux";

const Leftup = () => {
  const data = useSelector((state) => state.weather.data);
  const { main, weather } = data || {};
  const temperature = main?.temp;
  const temp1 = Math.round(temperature);
  const weatherDescription = weather?.[0]?.description;
  return (
    <div className={classes.leftcontainer}>
      <div className={classes.leftcontent}>
        <div className={classes.leftcontent2}>
          <h1 style={{ textTransform: "uppercase" }}>{data?.name}</h1>
          <span style={{ textTransform: "uppercase" }}>
            {weatherDescription}
          </span>
        </div>
        <div className={classes.leftcontent1}>
          <h1>{temp1}&#176;</h1>
        </div>
      </div>
      <div className={classes.leftpic}>
        {temperature < 20 ? (
          <img src={rain} alt="" />
        ) : temperature > 20 && temperature < 30 ? (
          <img src={cloud} alt="" />
        ) : (
          <img src={sun} alt="" />
        )}
      </div>
    </div>
  );
};
export default Leftup;
