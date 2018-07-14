import * as React from "react";

const dividerStyle = {
  position: "relative",
  textAlign: "center"
};

const lineStyle = {
  width: "100%",
  height: 1,
  margin: "12px 0 18px",
  backgroundColor: "#c4cdd4"
};

const dateStyle = {
  position: "absolute",
  top: -8,
  right: 0,
  left: 0,
  width: 110,
  margin: "0 auto",
  color: "#676767",
  backgroundColor: "#fafafa"
};

export const Divider = ({ date }) => (
  <div style={dividerStyle}>
    <div style={lineStyle} />
    <span style={dateStyle}>{date}</span>
  </div>
);
