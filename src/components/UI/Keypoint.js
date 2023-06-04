import classes from "./Keypoint.module.css";

const Keypoint = (props) => {
  const classNames = props.className.split(" ").map(className => classes[className]);
  
  return (
    <div className={`${classes.keypoint} ${classNames.join(" ")}`}>
      {props.children}
    </div>
  );
};

export default Keypoint;
