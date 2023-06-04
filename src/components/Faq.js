import { useState } from "react";
import classes from "./Faq.module.css";

const Faq = () => {
  const [activeId, setActiveId] = useState("q1");
  const clickHandler = (id) => {
    const updateId = activeId === id ? "" : id;
    setActiveId(updateId);
  };

  return (
    <section className={classes.faq__section}>
      <div className={`${classes.faq__container} container`}>
        <div className={classes.faq__container__title}>
          <h5>FAQ</h5>
          <h2>Frequently Asked Questions</h2>
          <p>
            Frequently Asked Questions About the Car Rental Booking Process on
            Our Website: Answers to Common Concerns and Inquiries.
          </p>
        </div>
        <div className={classes.all__questions}>
          <div
            id="q1"
            onClick={() => clickHandler("q1")}
            className={`${classes.faq__questions__box} ${
              activeId === "q1" ? classes.active : ""
            }`}
          >
            <div className={classes.faq__question}>
              <p>1. What is special about comparing rental car deals?</p>
              {activeId !== "q1" ? (
                <i className="fa-solid fa-angle-down"></i>
              ) : (
                <i className="fa-solid fa-angle-up"></i>
              )}
            </div>
            <div className={classes.faq__answer}>
              Comparing rental car deals is important as it helps find the best
              deal that fits your budget and requirements, ensuring you get the
              most value for your money. By comparing various options, you can
              find deals that offer lower prices, additional services, or better
              car models. You can find car rental deals by researching online
              and comparing prices from different rental companies.
            </div>
          </div>
          <div
            id="q2"
            onClick={() => clickHandler("q2")}
            className={`${classes.faq__questions__box} ${
              activeId === "q2" ? classes.active : ""
            }`}
          >
            <div className={classes.faq__question}>
              <p>2. How do I find the car rental deals?</p>
              {activeId !== "q2" ? (
                <i className="fa-solid fa-angle-down"></i>
              ) : (
                <i className="fa-solid fa-angle-up"></i>
              )}
            </div>
            <div className={classes.faq__answer}>
              You can find car rental deals by researching online and comparing
              prices from different rental companies. Websites such as Expedia,
              Kayak, and Travelocity allow you to compare prices and view
              available rental options. It is also recommended to sign up for
              email newsletters and follow rental car companies on social media
              to be informed of any special deals or promotions.
            </div>
          </div>
          <div
            id="q3"
            onClick={() => clickHandler("q3")}
            className={`${classes.faq__questions__box} ${
              activeId === "q3" ? classes.active : ""
            }`}
          >
            <div className={classes.faq__question}>
              <p>3. How do I find such low rental car prices?</p>
              {activeId !== "q3" ? (
                <i className="fa-solid fa-angle-down"></i>
              ) : (
                <i className="fa-solid fa-angle-up"></i>
              )}
            </div>
            <div
              className={`${classes.faq__answer} ${
                activeId ? classes.active : ""
              }`}
            >
              Book in advance: Booking your rental car ahead of time can often
              result in lower prices. Compare prices from multiple companies:
              Use websites like Kayak, Expedia, or Travelocity to compare prices
              from multiple rental car companies. Look for discount codes and
              coupons: Search for discount codes and coupons that you can use to
              lower the rental price. Renting from an off-airport location can
              sometimes result in lower prices.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
