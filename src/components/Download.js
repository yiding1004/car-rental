import Img1 from "../images/download/googleapp.svg";
import Img2 from "../images/download/appstore.svg";
import classes from "./Download.module.css";

const Download = () => {
  return (
    <section className={classes.download__section}>
      <div className="container">
        <div className={classes.download__text}>
          <h2>Download our app to get most out of it</h2>
          <p>
            Thrown shy denote ten ladies though ask saw. Or by to he going think
            order event music. Incommode so intention defective at convinced.
            Led income months itself and houses you.
          </p>
          <div className={classes.download__btns}>
            <img src={Img1} alt="download-img" />
            <img src={Img2} alt="download-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
