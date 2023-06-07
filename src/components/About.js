import AboutMain from "../images/about/about-main.jpg";
import Box1 from "../images/about/icon1.png";
import Box2 from "../images/about/icon2.png";
import Box3 from "../images/about/icon3.png";
import PlanTrip from "./PlanTrip";
import classes from "./About.module.css";

const About = () => {
  return (
    <div className="container">
      <section className={classes.about__section}>
        <img className={classes.about__img} src={AboutMain} alt="car-renting" />
        <div className={classes.about__text}>
          <h3>About Company</h3>
          <h2>You start the engine and your adventure begins</h2>
          <p>
            Certain but she but shyness why cottage. Guy the put instrument sir
            entreaties affronting. Pretended exquisite see cordially the you.
            Weeks quiet do vexed or whose. Motionless if no to affronting
            imprudence no precaution. My indulged as disposal strongly attended.
          </p>
          <div className={classes.about__text__icons}>
            <div className={classes.about__text__icons__box}>
              <img src={Box1} alt="car-icon" />
              <span>
                <h4>20</h4>
                <p>Car Types</p>
              </span>
            </div>
            <div className={classes.about__text__icons__box}>
              <img src={Box2} alt="car-icon" />
              <span>
                <h4>85</h4>
                <p>Rental Outlets</p>
              </span>
            </div>
            <div className={classes.about__text__icons__box}>
              <img src={Box3} alt="car-icon" className={classes.last__icon}/>
              <span>
                <h4>75</h4>
                <p>Repair Shop</p>
              </span>
            </div>
          </div>
        </div>
      </section>
      <PlanTrip></PlanTrip>
    </div>
  );
};

export default About;
