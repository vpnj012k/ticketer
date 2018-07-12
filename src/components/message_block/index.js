import * as React from "react";

export const MessageBlock = ({
  date,
  divisorDate,
  endTime,
  messageHash,
  receivedTime,
  sentTime,
  startTime
}) => (
  <div>
    <hr />
    <span>{divisorDate}</span>
    <div>
      <span>
        .
        <span>{sentTime}</span>
      </span>
      <i>Face</i>
    </div>
    <div>
      <i>Face</i>
      <span>
        DPMK, a.s.<br />
        SMS prestupny CL 0,80<br />
        EUR<br />
        Platnost od {date}
        <br />
        {startTime} do {endTime} hod.<br />
        {messageHash}
        <span>{receivedTime}</span>
      </span>
    </div>
  </div>
);
