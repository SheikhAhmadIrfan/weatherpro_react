import classes from "./City.module.css";
import Header from "../../components/header/Header";
import Input from "../../components/input/Input";
import Leftup from "../../components/leftup/Leftup";
import Leftmid from "../../components/leftmid/Leftmid";
import Leftdown from "../../components/leftdown/Leftdown";

const City = () => {
  return (
    <div className={classes.citycontainer}>
      <div>
        <Header />
      </div>
      <div>
        <Input />
      </div>
      <div className={classes.citymain}>
        <Leftup />
        <Leftmid />
        <Leftdown />
      </div>
    </div>
  );
};
export default City;
