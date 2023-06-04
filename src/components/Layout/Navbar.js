import { Link } from "react-router-dom";
import Logo from "../../images/logo/logo.png";
import classes from "./Navbar.module.css";
import Button from "../UI/Button";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className={classes.navbar}>
          <div className={classes.navbar__img}>
            <img src={Logo} alt="car-rental-logo" />
          </div>
          <ul className={classes.navbar__links}>
            <li>
              <Link className="home__link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="about__link" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="model__link">Vehicle Models</Link>
            </li>
            <li>
              <Link className="testi__link">Testimonials</Link>
            </li>
            <li>
              <Link className="team__link">Our Team</Link>
            </li>
            <li>
              <Link className="contact__link">Contact</Link>
            </li>
          </ul>
          <div className={classes.navbar__buttons}>
            <div className={classes.navbar__button__signin}>Sign In</div>
            <Button className="navbar__button__register register">
              Register
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
