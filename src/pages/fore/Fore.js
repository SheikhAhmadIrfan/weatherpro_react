import Forecastitem from "../../components/forecastitem/Forecastitem";
import Forecastsearch from "../../components/forecastsearch/Forecastsearch";
import Header from "../../components/header/Header";

import classes from "./Fore.module.css";

const Fore = () => {
  return (
    <div className={classes.forecontainer}>
      <div>
        <Header />
      </div>
      <div className={classes.foremain}>
        <Forecastsearch/>
        <Forecastitem/>
      </div>
    </div>
  );
};
export default Fore;
