import classes from './Button.module.css';

const Button = (props) => {
  const classNames = props.className.split(" ").map(className => classes[className]);

  return (
    <button
      type={props.type || 'button'}
      className={`${classes.button} ${classNames.join(" ")}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
