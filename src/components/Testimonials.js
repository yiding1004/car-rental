import pfp1 from "../images/testimonials/pfp1.jpg";
import pfp2 from "../images/testimonials/pfp2.jpg";
import classes from "./Testimonials.module.css";

const Testimonials = () => {
  return (
    <section className={classes.testimonials__section}>
      <div className={`${classes.testimonials__container} container`}>
        <div className={classes.testimonials__container__title}>
          <h4>Reviewed by People</h4>
          <h2>Client's Testimonials</h2>
          <p>
            Discover the positive impact we've made on the our clients by
            reading through their testimonials. Our clients have experienced our
            service and results, and they're eager to share their positive
            experiences with you.
          </p>
        </div>
        <div className={classes.all__testimonials}>
          <div className={classes.all__testimonials__box}>
            <span className={classes.quotes__icon}>
              <i className="fa-solid fa-quote-right"></i>
            </span>
            <p>
              " We rented a car from this website and had an amazing experience!
              The booking was easy and the rental rates were very affordable. "
            </p>
            <div className={classes.all__testimonials__box__profile}>
              <img src={pfp1} alt="user-img" />
              <h4>Parry Hotter</h4>
              <p>Belgrade</p>
            </div>
          </div>
          <div className={classes.all__testimonials__box}>
            <span className={classes.quotes__icon}>
              <i className="fa-solid fa-quote-right"></i>
            </span>
            <p>
              " The car was in great condition and made our trip even better.
              Highly recommend for this car rental website! "
            </p>
            <div className={classes.all__testimonials__box__profile}>
              <img src={pfp2} alt="user-img" />
              <h4>Ron Rizzly</h4>
              <p>Novi Sad</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
