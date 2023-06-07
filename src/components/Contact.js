import classes from "./Contact.module.css";
import Button from "./UI/Button";

const Contact = () => {
  return (
    <section className="contact__section">
      <div className="container">
        <div className={classes.contact__content}>
          <div className={classes.contact__content__text}>
            <h2>Need additional information?</h2>
            <p>
              A multifaceted professional skilled in multiple fields of
              research, development as well as a learning specialist. Over 15
              years of experience.
            </p>
            <a href="/">
              <i className="fa-solid fa-phone"></i>&nbsp; (123) 456-7869
            </a>
            <a href="/">
              <i className="fa-solid fa-envelope"></i>&nbsp;
              carrental@carmail.com
            </a>
            <a href="/">
              <i className="fa-solid fa-location-dot"></i>&nbsp; Belgrade,
              Serbia
            </a>
          </div>
          <form className={classes.contact__content__form}>
            <label>
              Full Name <b>*</b>
            </label>
            <input type="text" placeholder='E.g: "Joe Shmoe"'></input>

            <label>
              Email <b>*</b>
            </label>
            <input type="email" placeholder="youremail@example.com"></input>

            <label>
              Tell us about it <b>*</b>
            </label>
            <textarea placeholder="Write Here.."></textarea>

            <Button type="submit" className="send__message">
              <i className="fa-solid fa-envelope-open-text"></i>&nbsp; Send
              Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
