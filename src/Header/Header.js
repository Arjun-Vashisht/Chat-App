import React, { useState } from "react";

import HeaderList from "./HeaderList";
import classes from "./Header.module.css";
import Chat from "./Chat";

const Header = () => {

  const DUMMY_AVATAR = [
    {
      id: 1,
      name: "Arjun",
      message: "Let`s catch up over dinner at around 5pm?",
      time: "5:34pm",
    },
    {
      id: 2,
      name: "Vatsal",
      message: "Where have you been?",
      time: "5:30pm",
    },
    {
      id: 3,
      name: "Porush",
      message: "Nope",
      time: "5:03pm",
    },
    {
      id: 4,
      name: "Abhijeet",
      message: "Okay",
      time: "4:45pm",
    },
    {
      id: 5,
      name: "Pushpak",
      message: "Hello",
      time: "4:45pm",
    },
    {
      id: 6,
      name: "Aaditya",
      message: "Done",
      time: "4:45pm",
    },
    {
      id: 7,
      name: "Presh",
      message: "Bye",
      time: "4:45pm",
    },
    {
      id: 8,
      name: "Priya",
      message: "I love you",
      time: "4:45pm",
    },
    {
      id: 9,
      name: "Deepak",
      message: "Cheater",
      time: "4:45pm",
    },
    {
      id: 10,
      name: "Amit",
      message: "Hello brother",
      time: "4:45pm",
    },
  ];
  const [dummy, setDummy] = useState(DUMMY_AVATAR);

  const searchHandler = (event) => {
  
      setDummy(
      DUMMY_AVATAR.filter((data) => {
        return data.name.toLowerCase().includes(event.target.value.toLowerCase());
      })
    );
  };

  return (
    <React.Fragment>
      <div className={classes.headText}>
        New Connections <div className={classes.notification}> 2</div>
      </div>
      <div className={classes.head}>
        {DUMMY_AVATAR.map((data) => (
          <HeaderList key={data.id} id={data.id} title={data.name}></HeaderList>
        ))}
      </div>
      <div className={classes.board}>
        <p>Messages</p>
        <input type="text" placeholder="Search..." onChange={searchHandler} />
      </div>
      <div className={classes.msg}>
        {dummy.map((data) => (
          <Chat
            key={data.id}
            id={data.id}
            title={data.name}
            message={data.message}
            time={data.time}
          ></Chat>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Header;
