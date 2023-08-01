import classes from "./Search.module.css";
import sun from "../../assets/sun1.jpg";
import { useSelector, useDispatch } from "react-redux";
import { fetchWeather, fetchforecast } from "../../redux/slice/weather";
import { useState, useEffect } from "react";
import cloud from "../../assets/cloud1.jpg";
import rain from "../../assets/rain1.jpg";
import geolocation from "../../hooks/Geolocation";
import { getCityNameFromCoordinates } from "../../redux/slice/weather";
import Loader from "../../ui/loader/Loader";

const Search = () => {
  const Location = geolocation();
  const latitude = Location.coordinates.lat;
  const longitude = Location.coordinates.lon;
  const dispatch = useDispatch();
  const [ssearch, ssetSearch] = useState("");
  const [finish, setFinish] = useState("london");
  const [load, setLoad] = useState(false);
  const handleApi = () => {
    setLoad(true);
    dispatch(fetchWeather(ssearch))
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
    setFinish(ssearch);
  };
  const handleLocation = async () => {
    try {
      const cityName = await getCityNameFromCoordinates(latitude, longitude);
      dispatch(fetchWeather(cityName))
        .then((result) => {
          const { coord } = result.payload;
          if (coord) {
            dispatch(fetchforecast({ a: coord?.lat, b: coord?.lon }));
          }
        })
        .catch((error) => {
          console.error("Error fetching weather data:", error);
        });

      setFinish(cityName);
    } catch (error) {
      console.error("Error fetching city name:", error);
    }
  };
  const handleInput = (e) => {
    const value = e.target.value;
    if (value.match(/[0-9]/)) {
      e.preventDefault();
      alert("Please enter a valid city name. Integers are not allowed.");
    } else {
      ssetSearch(value);
    }
  };
  useEffect(() => {
    dispatch(fetchWeather("London"));
    dispatch(fetchforecast({ a: -0.1257, b: 51.5085 }));
  }, [dispatch]);
  const data = useSelector((state) => state.weather.data);
  const { main, weather } = data || {};
  const temperature = main?.temp;
  const temp1 = Math.round(temperature);
  const weatherDescription = weather?.[0]?.description;
  return (
    <div className={classes.searchcontainer}>
      <div className={classes.searchinput}>
        <input
          type="text"
          placeholder="Search for Cities"
          value={ssearch}
          onInput={handleInput}
        />
        <button onClick={handleApi}>Search</button>
        <button onClick={handleLocation}>Current Location</button>
      </div>
      {!load && (
        <div className={classes.searchmain}>
          <div className={classes.searchcontent}>
            <div className={classes.searchcontent2}>
              <h1 style={{ textTransform: "uppercase" }}>{finish}</h1>
              <span style={{ textTransform: "uppercase" }}>
                {weatherDescription}
              </span>
            </div>
            <div className={classes.searchcontent1}>
              <h4>{temp1 + 1}&#176;</h4>
            </div>
          </div>
          <div className={classes.searchpic}>
            {temperature < 20 ? (
              <img src={rain} alt="" />
            ) : temperature > 20 && temperature < 30 ? (
              <img src={cloud} alt="" />
            ) : (
              <img src={sun} alt="" />
            )}
          </div>
        </div>
      )}
      {load && <Loader />}
    </div>
  );
};

export default Search;
