import Button from "./UI/Button";
import classes from "./CarBox.module.css";

const CarBox = (props) => {
  const { img, price, model, year, doors, air, transmission, fuel } =
    props.data;
  const bookBtn = () => {
    document
      .querySelector("#book__section")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={classes.cars__box}>
      <div className={classes.car__img__box}>
        <img src={img} alt="car-img" className="car-img" />
      </div>
      <div className={classes.pick__description}>
        <div className={classes.pick__description__price}>
          <span>${price}</span> / rent per day
        </div>
        <div className={classes.pick__description__table}>
          <div className={classes.pick__description__table__col}>
            <span>Model</span>
            <span>{model}</span>
          </div>
          <div className={classes.pick__description__table__col}>
            <span>Mark</span>
            <span>{model}</span>
          </div>
          <div className={classes.pick__description__table__col}>
            <span>Year</span>
            <span>{year}</span>
          </div>
          <div className={classes.pick__description__table__col}>
            <span>Doors</span>
            <span>{doors}</span>
          </div>
          <div className={classes.pick__description__table__col}>
            <span>AC</span>
            <span>{air}</span>
          </div>
          <div className={classes.pick__description__table__col}>
            <span>Transmission</span>
            <span>{transmission}</span>
          </div>
          <div className={classes.pick__description__table__col}>
            <span>Fuel</span>
            <span>{fuel}</span>
          </div>
        </div>
        <Button onClick={bookBtn} className="reserve__btn reserve__now">
          Reserve Now
        </Button>
      </div>
    </div>
  );
};

export default CarBox;
