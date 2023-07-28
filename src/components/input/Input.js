import classes from "./Input.module.css";
import sun from "../../assets/sun1.jpg";
import { useSelector, useDispatch } from "react-redux";
import { fetchWeather, fetchforecast } from "../../redux/slice/weather";
import { useState, useEffect } from "react";
import cloud from "../../assets/cloud1.jpg";
import rain from "../../assets/rain1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const Input = () => {
  const [search, setSearch] = useState("lahore");
  const [arr, setarr] = useState([]);
  const dispatch = useDispatch();
  const handleApi = () => {
    dispatch(fetchWeather(search)).catch((error) => {
      console.error("Error fetching weather data:", error);
    });
  };
  const data = useSelector((state) => state.weather.data);
  const { main } = data || {};

  useEffect(() => {
    const storedArr = JSON.parse(localStorage.getItem("isloggedin"));
    if (storedArr) {
      setarr(storedArr);
    }
  }, []);
  useEffect(() => {
    if (data) {
      const { coord, name } = data;
      if (coord && name) {
        dispatch(fetchforecast({ a: coord.lat, b: coord.lon }));
        const cityData = {
          name,
          temperature: main?.temp,
        };
        setarr((prev) => {
          const updatedArr = [cityData, ...prev.slice(0, 3 - 1)];
          localStorage.setItem("isloggedin", JSON.stringify(updatedArr));
          return updatedArr;
        });
      }
    }
  }, [data, main?.temp, dispatch]);
  const handleDelete = (name) => {
    const newarr = arr.filter((item) => {
      return item.name !== name;
    });
    setarr(newarr);
    localStorage.setItem("isloggedin", JSON.stringify(newarr));
  };
  return (
    <div className={classes.inputcontainer}>
      <div className={classes.inputsearch}>
        <input
          type="text"
          placeholder="Search for Cities"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleApi}>Add</button>
      </div>
      <ul className={classes.ui}>
        {arr.map((i) => {
          return (
            <li className={classes.inputmain} key={Math.random()}>
              {i.temperature > 30 ? (
                <img src={sun} alt="" />
              ) : i.temperature > 20 && i.temperature < 30 ? (
                <img src={cloud} alt="" />
              ) : (
                <img src={rain} alt="" />
              )}
              <div className={classes.inputcontent}>
                <h1>{i.name}</h1>
                <span>10:23</span>
              </div>
              <div
                className={classes.font}
                onClick={() => handleDelete(i.name)}
              >
                <FontAwesomeIcon icon={faTrashCan} size="xl" />
              </div>
              <h1 className={classes.inputh1}>
                {Math.round(i.temperature)}&#176;
              </h1>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Input;
