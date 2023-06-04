import { useState, useEffect } from "react";
import HeroCar from "../images/hero/main-car.png";
import BgShape from "../images/hero/hero-bg.png";
import classes from "./Hero.module.css";
import Button from "./UI/Button";

const Hero = () => {
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  };

  const bookBtn = () => {
    document
      .querySelector("#book__section")
      .scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.pageYOffset > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <section id="hero__section" className={classes.hero__section}>
      <div className="container">
        <img src={BgShape} alt="bg-shape" className={classes.bg__shape} />
        <div className={classes.heroContent}>
          <div className={classes.heroContent__text}>
            <h4>Plan your trip now</h4>
            <h1>
              Save <span>big</span> with our car rental
            </h1>
            <p>
              Rent the car of your dreams. Unbeatable prices, unlimited miles,
              flexible pick-up options and much more.
            </p>
            <div className={classes.heroContent__text__btns}>
              <Button
                onClick={bookBtn}
                className="heroContent__text__btns__bookRide"
              >
                Book Ride &nbsp; <i className="fa-solid fa-circle-check"></i>
              </Button>
              <Button className="heroContent__text__btns__learnMore black">
                Learn More &nbsp; <i className="fa-solid fa-angle-right"></i>
              </Button>
            </div>
          </div>
          <img
            src={HeroCar}
            alt="car-img"
            className={classes.heroContent__carImg}
          />
        </div>
      </div>
      <div
        onClick={scrollToTop}
        className={`${classes.scroll__up} ${goUp ? classes.show__scroll : ""}`}
      >
        <i className="fa-solid fa-angle-up"></i>
      </div>
    </section>
  );
};

export default Hero;
