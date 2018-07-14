import * as React from "react";
import { Contact } from "components/contact";
import "./style.css";

export const TheirMessage = ({
  date,
  endTime,
  messageHash,
  receivedTime,
  startTime
}) => (
  <div className="message-wrapper message-wrapper--their">
    <Contact />
    <div className="message">
      <span className="text">
        DPMK, a.s.<br />
        SMS prestupny CL 0,80<br />
        EUR<br />
        Platnost od {date}
        <br />
        {startTime} do {endTime} hod.<br />
        {messageHash}
      </span>
      <div className="time">{receivedTime}</div>
    </div>
  </div>
);
