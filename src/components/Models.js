import Model from "./Model";
import { MODEL_DATA } from "../data/ModelData";
import classes from "./Models.module.css";

const Models = () => {
  return (
    <div className="container">
      <div className={classes.models__section}>
        {MODEL_DATA.map((model, index) => (
          <Model key={index} data={model}></Model>
        ))}
      </div>
    </div>
  );
};

export default Models;
