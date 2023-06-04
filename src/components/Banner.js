import classes from "./Banner.module.css";

const Banner = () => {
  return (
    <section className={classes.banner__section}>
      <div className={`${classes.banner__content} container`}>
        <div className={classes.banner__content__text}>
          <h2>Save big with our cheap car rental!</h2>
          <p>
            Top Airports. Local Suppliers. <span>24/7</span> Support.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
