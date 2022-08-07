import React from "react";

import classes from "./Chat.module.css";

const Chat = (props) => {
  let imgNum = `../a${props.id}.webp`;
  return (
    <React.Fragment>
      <div className={classes.block}>
        <img className={classes.chatImg} src={imgNum} alt="avatarImg" />
        <div className={classes.msgBlock}>
          <p className={classes.chatName}>{props.title}</p>
          <p className={classes.chatMsg}>{props.message}<span>{props.time}</span></p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Chat;
