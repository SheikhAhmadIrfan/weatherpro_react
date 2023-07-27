import classes from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUmbrella,
  faCloudSun,
  faBars,
  faMapLocation,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className={classes.headercontainer}>
      <div className={classes.headermain1}>
        <span>
          <FontAwesomeIcon
            icon={faUmbrella}
            bounce
            size="2xl"
            style={{ color: "#210a57" }}
            onClick={() => navigate("/")}
          />
        </span>
      </div>
      <div className={classes.headermain2}>
        <span>
          <FontAwesomeIcon
            icon={faCloudSun}
            size="2xl"
            style={{ color: "#210a57" }}
            onClick={() => navigate("/")}
            
          />
          <p onClick={() => navigate("/")}>Weather</p>
        </span>
        <span>
          <FontAwesomeIcon
            icon={faBars}
            size="2xl"
            style={{ color: "#210a57" }}
            onClick={() => navigate("/cities")}
          />
          <p onClick={() => navigate("/cities")}>Cities</p>
        </span>
        <span onClick={()=>navigate("/map")}>
          <FontAwesomeIcon
            icon={faMapLocation}
            size="2xl"
            style={{ color: "#210a57" }}
          />
          <p>Map</p>
        </span>
        <span onClick={()=>navigate("/fore")}>
          <FontAwesomeIcon
            icon={faSliders}
            size="2xl"
            style={{ color: "#210a57" }}
          />
          <p>Forecast</p>
        </span>
      </div>
    </div>
  );
};
export default Header;
