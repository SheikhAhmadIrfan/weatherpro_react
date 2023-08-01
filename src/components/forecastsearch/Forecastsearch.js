import classes from "./Forecastsearch.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather, fetchforecast } from "../../redux/slice/weather";
import { weathersliceactions } from "../../redux/slice/weather";
import Loader from "../../ui/loader/Loader";

const Forecastsearch = () => {
  const [search, setSearch] = useState("lahore");
  const [load,setLoad]=useState(false)
  const dispatch = useDispatch();
  const handleApi = () => {
    setLoad(true);
    dispatch(weathersliceactions.setCount(count));
    dispatch(fetchWeather(search))
      .then((result) => {
        const { coord } = result.payload;
        if (coord) {
          dispatch(fetchforecast({ a: coord?.lat, b: coord?.lon }));
        }
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      })
      .finally(() => {
        setTimeout(() => {
          setLoad(false);
        }, 1000);
      });
  };
  const data1 = useSelector((state) => state.forecast.item);
  const { list } = data1 || {};
  useEffect(() => {
    if (list) {
      const cityDataArray = list.map((item) => ({
        main: item?.weather?.[0]?.main,
        temperature: item?.main?.temp,
      }));
      dispatch(weathersliceactions.addarray(cityDataArray));
    }
  }, [list, dispatch]);
  const [count, setCount] = useState(1);
  const handleInput = (e) => {
    const value = e.target.value;
    if (value.match(/[0-9]/)) {
      e.preventDefault();
      alert("Please enter a valid city name. Integers are not allowed.");
    } else {
      setSearch(value);
    }
  };
  const handleDaysInput = (e) => {
    const value = e.target.value;
    if (!value.match(/^\d+$/)) {
      e.preventDefault();
      alert("Please enter a valid number of days.");
    } else {
      setCount(value);
    }
  };
  return (
    <div className={classes.forecastcontainer}>
      <div className={classes.forecastsearch}>
      <input
          type="text"
          placeholder="Search for Cities"
          value={search}
          onInput={handleInput}
        />
      </div>
      <div className={classes.forecastsearch1}>
        <input
          type="number"
          placeholder="Days"
          min="1"
          max="7"
          onChange={handleDaysInput}
        />
        <button onClick={handleApi}>Search</button>
      </div>
      {load && <Loader/>}
    </div>
  );
};
export default Forecastsearch;
