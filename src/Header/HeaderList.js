import React from "react";
import classes from "./HeaderList.module.css";

const HeaderList = (props) => {
  let imgNum = `../a${props.id}.webp`;
  return (
    <React.Fragment>
      <div className={classes.image}>
        <img src={imgNum} alt="avatarImg" />
        <p  className='perName'>{props.title}</p>
      </div>
    </React.Fragment>
  );
};

export default HeaderList;
