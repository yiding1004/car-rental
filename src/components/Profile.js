import classes from "./Profile.module.css";

const Profile = (props) => {
  const { img, name, job } = props.data;

  return (
    <div className={classes.team__person__box}>
      <div className={classes.team__person__box__img}>
        <img src={img} alt="person-img" />
      </div>
      <div className={classes.team__person__box__descr}>
        <h3>{name}</h3>
        <p>{job}</p>
      </div>
    </div>
  )
}

export default Profile;