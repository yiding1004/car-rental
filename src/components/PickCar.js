import { useState } from "react";
import Button from "./UI/Button";
import CarBox from "./CarBox";
import { CAR_DATA } from "../data/CarData";
import classes from "./PickCar.module.css";

const PickCar = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [carData, setCarData] = useState(CAR_DATA[0]);
  const activiateCarBox = (index) => {
    setActiveIdx(index);
    setCarData(CAR_DATA[index]); // overwrite with find function for unique ID
  };

  return (
    <section className={classes.pick__section}>
      <div className={`${classes.pick__container} container`}>
        <div className={classes.pick__container__title}>
          <h3>Vehicle Models</h3>
          <h2>Our rental fleet</h2>
          <p>
            Choose from a variety of our amazing vehicles to rent for your next
            adventure or business trip
          </p>
        </div>
        <div className={classes.pick__container__content}>
          <div className={classes.pick__btn_boxes}>
            {CAR_DATA.map((car, index) => (
              <Button
                key={index}
                className={`${classes.pick__car__btn} ${
                  activeIdx === index ? "active" : ""
                } display`}
                onClick={activiateCarBox.bind(null, index)}
              >
                {car.name}
              </Button>
            ))}
          </div>
          <CarBox data={carData}></CarBox>
        </div>
      </div>
    </section>
  );
};

export default PickCar;
