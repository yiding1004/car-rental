import Button from "../UI/Button";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={`${classes.footer__container} container`}>
        <ul className={classes.footer__content__list1}>
          <li>
            CAR <span>Rental</span>
          </li>
          <li>
            <p>
              We offers a big range of vehicles for all your driving needs. We
              have the perfect car to meet your needs.
            </p>
          </li>
          <li>
            <a href="tel:123456789">
              <i className="fa-solid fa-phone"></i>
              &nbsp; (123) -456-789
            </a>
          </li>
          <li>
            <a href="mailto:carrental@gmail.com">
              <i className="fa-solid fa-envelope"></i>
              &nbsp; carrental@gmail.com
            </a>
          </li>
          <li>
            <a
              style={{ fontSize: "14px" }}
              target="_blank"
              rel="noreferrer"
              href="https://xpeedstudio.com/"
            >
              Design by XpeedStudio
            </a>
          </li>
        </ul>
        <ul className={classes.footer__content__list2}>
          <li>COMPANY</li>
          <li>
            <a href="#home">New York</a>
          </li>
          <li>
            <a href="#home">Careers</a>
          </li>
          <li>
            <a href="#home">Mobile</a>
          </li>
          <li>
            <a href="#home">Blog</a>
          </li>
          <li>
            <a href="#home">How we work</a>
          </li>
        </ul>

        <ul className={classes.footer__content__list2}>
          <li>WORKING HOURS</li>
          <li>Mon - Fri: 9:00AM - 9:00PM</li>
          <li>Sat: 9:00AM - 19:00PM</li>
          <li>Sun: Closed</li>
        </ul>
        <ul className={classes.footer__content__list2}>
          <li>SUBSCRIPTION</li>
          <li>
            <p>Subscribe your Email address for latest news & updates.</p>
          </li>
          <li>
            <input type="email" placeholder="Enter Email Address"></input>
          </li>
          <li>
            <Button className="submit__email">Submit</Button>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
