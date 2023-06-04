import classes from "./BookCar.module.css";
import Button from "./UI/Button";

const BookCar = () => {
  return (
    <section id="book__section" className={classes.book__section}>
      <div className="modal__overlay"></div>
      {/* build a food order app for modal */}
      <div className="container">
        <div className={classes.book__box}>
          <h2>Book a car</h2>
          <form className={classes.box__form}>
            <div className={`${classes.control__group} control__group1`}>
              <label htmlFor="book__car__type">
                <i className="fa-solid fa-car"></i> &nbsp; Select Your Car Type
                &nbsp;
                <b>*</b>
              </label>
              <select id="book__car__type">
                <option>Select your car type</option>
                <option>Audi A1 S-Line</option>
                <option>VW Golf 6</option>
                <option>Toyota Camry</option>
                <option>BMW 320 ModernLine</option>
                <option>Mercedes-Benz GLK</option>
                <option>VW Passat CC</option>
              </select>
            </div>
            <div className={`${classes.control__group} control__group2`}>
              <label htmlFor="book__car__pickUp">
                <i className="fa-solid fa-location-dot"></i> &nbsp; Pick-up
                &nbsp;
                <b>*</b>
              </label>
              <select id="book__car__pickUp">
                <option>Select pick up location</option>
                <option>Belgrade</option>
                <option>Novi Sad</option>
                <option>Nis</option>
                <option>Kragujevac</option>
                <option>Subotica</option>
              </select>
            </div>
            <div className={`${classes.control__group} control__group3`}>
              <label htmlFor="book__car__dropOf">
                <i className="fa-solid fa-location-dot"></i> &nbsp; Drop-of
                &nbsp;
                <b>*</b>
              </label>
              <select id="book__car__pickUp">
                <option>Select drop off location</option>
                <option>Novi Sad</option>
                <option>Belgrade</option>
                <option>Nis</option>
                <option>Kragujevac</option>
                <option>Subotica</option>
              </select>
            </div>
            <div className={`${classes.control__group} control__group4`}>
              <label htmlFor="book__car__pickUpDate">
                <i className="fa-regular fa-calendar-days "></i> &nbsp; Pick-up
                &nbsp;
                <b>*</b>
              </label>
              <input
                id="book__car__pickUpDate"
                type="date"
              ></input>
            </div>
            <div className={`${classes.control__group} control__group5`}>
              <label htmlFor="book__car__dropOfDate">
                <i className="fa-regular fa-calendar-days "></i> &nbsp; Drop-of
                &nbsp;
                <b>*</b>
              </label>
              <input
                id="book__car__dropOfDate"
                type="date"
              ></input>
            </div>
            <Button className="search">Search</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookCar;
