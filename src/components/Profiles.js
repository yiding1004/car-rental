import { TEAM_DATA } from "../data/TeamData";
import Profile from "./Profile";
import classes from "./Profiles.module.css";

const Profiles = () => {
  return (
    <div className="container">
      <div className={classes.team__peoples}>
        {TEAM_DATA.map((person, index) => (
          <Profile key={index} data={person}></Profile>
        ))}
      </div>
    </div>
  );
};

export default Profiles;
