import classes from "./Condition.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTemperatureThreeQuarters,
  faWind,
  faSun,
  faCloudRain,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

const Condition = () => {
  const data = useSelector((state) => state.weather.data);
  const { wind, main } = data || {};
  const windSpeed = wind?.speed;
  const temperature = main?.temp;
  const uv = main?.humidity;

  return (
    <div className={classes.conditioncontainer}>
      <div className={classes.conditionheading}>
        <span style={{ color: "black" }}>AIR CONDITIONS</span>
      </div>
      <div className={classes.conditionmain}>
        <div className={classes.conditioncontent}>
          <div className={classes.conditioncontentone}>
            <div className={classes.conditioncontenttwo}>
              <FontAwesomeIcon icon={faTemperatureThreeQuarters} size="xl" />
              <span>Real Feel</span>
            </div>
            <h4>{temperature}&#176;</h4>
          </div>
          <div className={classes.conditioncontentone}>
            <div className={classes.conditioncontenttwo}>
              <FontAwesomeIcon icon={faWind} size="xl" />
              <span>Wind</span>
            </div>
            <h4>{windSpeed} Km\h</h4>
          </div>
        </div>
        <div className={classes.conditioncontent}>
          <div className={classes.conditioncontentone}>
            <div className={classes.conditioncontenttwo}>
              <FontAwesomeIcon icon={faCloudRain} size="xl" />
              <span>Chance of Rain</span>
            </div>
            <h4>{windSpeed} %</h4>
          </div>
          <div
            className={`${classes.conditioncontentone} ${classes.conditioncontenttwoo}`}
          >
            <div className={classes.conditioncontenttwo}>
              <FontAwesomeIcon icon={faSun} size="xl" />
              <span>UV Index</span>
            </div>
            <h4>{uv}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Condition;
