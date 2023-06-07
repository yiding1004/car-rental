import { Link } from "react-router-dom";
import classes from "./PageHeader.module.css";

const PageHeader = (props) => {
  return (
    <div className={classes.page__header__section}>
      <div className={classes.page__header__overlay}></div>
      <div className="container">
        <div className={classes.page__header__text}>
          <h3>{props.name}</h3>
          <p>
            <Link to="/">Home</Link> / {props.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
