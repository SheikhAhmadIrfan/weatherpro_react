import classes from "./Home.module.css";
import Header from '../../components/header/Header';
import Search from '../../components/search/Search';
import Today from '../../components/today/Today';
import Condition from '../../components/condition/Condition';
import Forecast from '../../components/forecast/Forecast';

function Home() {
  return (
    <>
      <div className={classes.homecontainer}>
        <div>
          <Header />
        </div>
        <div className={classes.homemain}>
          <Search />
          <Today />
          <Condition />
        </div>
        <div className={classes.content}>
          <Forecast />
        </div>
      </div>
    </>
  );
}

export default Home;
