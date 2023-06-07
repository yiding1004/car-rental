import classes from "./PhoneBanner.module.css"; 

const PhoneBanner = () => {
  return (
    <section className={classes.phone__banner__section}>
      <div className={classes.phone__banner__overlay}></div>
      <div className="container">
        <div className={classes.phone__banner__text}>
          <h2>Book a car by getting in touch with us</h2>
          <span>
            <i className="fa-solid fa-phone"></i>
            <h3>(123) 456-7869</h3>
          </span>
        </div>
      </div>
    </section>
  );
};

export default PhoneBanner;
