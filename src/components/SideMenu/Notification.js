import React from "react";
import { StyledNotification } from "./styles";

function Notification({ notification: { title, desc, image, time } }) {
  return (
    <StyledNotification imgbackground={image}>
      <div className="img"></div>
      <div>
        <p className="title">{title}</p>
        <p className="desc">{desc}</p>
        <p className="time">{time}</p>
      </div>
    </StyledNotification>
  );
}

export default Notification;
