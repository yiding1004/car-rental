import Button from "./UI/Button";
import Keypoint from "./UI/Keypoint";
import MainImg from "../images/chooseUs/main.png";
import Box1 from "../images/chooseUs/icon1.png";
import Box2 from "../images/chooseUs/icon2.png";
import Box3 from "../images/chooseUs/icon3.png";
import classes from "./ChooseUs.module.css";

const ChooseUs = () => {
  const heroBtn = () => {
    document
      .querySelector("#hero__section")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={classes.choose__section}>
      <div className={`${classes.choose__container} container`}>
        <img src={MainImg} alt="cars-img" className={classes.choose__main_img}/>
        <div className={classes.text__container}>
          <div className={classes.text__container__left}>
            <h4>Why Choose Us</h4>
            <h2>Best valued deals you will ever find</h2>
            <p>
              Discover the best deals you'll ever find with our unbeatable
              offers. We're dedicated to providing you with the best value for
              your money, so you can enjoy top-quality services and products
              without breaking the bank. Our deals are designed to give you the
              ultimate renting experience, so don't miss out on your chance to
              save big.
            </p>
            <Button onClick={heroBtn} className="text__container__left__btn find__details">
              Find Details &nbsp;
              <i className="fa-solid fa-angle-right"></i>
            </Button>
          </div>
          <div className={classes.text__container__right}>
            <Keypoint className="medium">
              <img src={Box1} alt="car-img" />
              <h4>Cross Country Drive</h4>
              <p>
                Take your driving experience to the next level with our
                top-notch vehicles for your cross-country adventures.
              </p>
            </Keypoint>
            <Keypoint className="medium">
              <img src={Box2} alt="coin-img" />
              <h4>All Inclusive Pricing</h4>
              <p>
                Get everything you need in one convenient, transparent price
                with our all-inclusive pricing policy.
              </p>
            </Keypoint>
            <Keypoint className="medium">
              <img src={Box3} alt="coin-img" />
              <h4>No Hidden Charges</h4>
              <p>
                Enjoy peace of mind with our no hidden charges policy. We
                believe in transparent and honest pricing.
              </p>
            </Keypoint>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
