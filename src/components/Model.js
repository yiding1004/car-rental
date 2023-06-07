import Button from "../components/UI/Button";
import classes from "./Model.module.css";

const Model = (props) => {
  const { img, brand, price, model } = props.data;
  return (
    <>
      <div className={classes.models__content}>
        <img src={img} alt="car-img" />
        <div className={classes.models__box__descr}>
          <div className={classes.models__box__descr__title}>
            <div className={classes.models__box__descr__title__name}>
              <p>{model}</p>
              <span>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </span>
            </div>
            <div className={classes.models__box__descr__title__price}>
              <h4>${price}</h4>
              <p>per day</p>
            </div>
          </div>
          <div className={classes.models__box__descr__details}>
            <span>
              <i className="fa-solid fa-car-side"></i> &nbsp; {brand}
            </span>
            <span>
              4/5 &nbsp; <i className="fa-solid fa-car-side"></i>
            </span>
            <span>
              <i className="fa-solid fa-car-side"></i> &nbsp; Manual
            </span>
            <span>
              Diesel &nbsp; <i className="fa-solid fa-car-side"></i>
            </span>
          </div>
          <Button className="models__box__descr__btn book__ride">
            Book Ride
          </Button>
        </div>
      </div>
    </>
  );
};

export default Model;
