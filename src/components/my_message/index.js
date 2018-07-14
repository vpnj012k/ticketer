import * as React from "react";
import { Contact } from "components/contact";
import "./style.css";

export const MyMessage = ({ sentTime }) => (
  <div className="message-wrapper message-wrapper--mine">
    <div className="message">
      <span className="text">.</span>
      <div className="time">{sentTime}</div>
    </div>
    <Contact />
  </div>
);
