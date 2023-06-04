import Keypoint from "./UI/Keypoint";
import SelectCar from "../images/plan/icon1.png";
import Contact from "../images/plan/icon2.png";
import Drive from "../images/plan/icon3.png";
import classes from "./PlanTrip.module.css";

const PlanTrip = () => {
  return (
    <section className={classes.plan__section}>
      <div className={`${classes.plan__container} container`}>
          <div className={classes.plan__container__title}>
            <h3>Plan your trip now</h3>
            <h2>Quick & easy car rental</h2>
          </div>
          <div className={classes.plan_container__boxes}>
            <Keypoint className="plan_container__box large">
              <img src={SelectCar} alt="select-car-icon" />
              <h3>Select Car</h3>
              <p>
                We offers a big range of vehicles for all your driving needs. We
                have the perfect car to meet your needs
              </p>
            </Keypoint>
            <Keypoint className="plan_container__box large">
              <img src={Contact} alt="contact-operator-icon" />
              <h3>Contact Operator</h3>
              <p>
                Our knowledgeable and friendly operators are always ready to
                help with any questions or concerns
              </p>
            </Keypoint>
            <Keypoint className="plan_container__box large">
              <img src={Drive} alt="drive-icon" />
              <h3>Let's Drive</h3>
              <p>
                Whether you're hitting the open road, we've got you covered with
                our wide range of cars
              </p>
            </Keypoint>
          </div>
      </div>
    </section>
  );
};

export default PlanTrip;
