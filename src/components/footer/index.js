import * as React from "react";
import footer from "assets/footer.png";

const { Fragment } = React;

const cursorStyle = {
  position: "fixed",
  bottom: 12,
  left: 44,
  fontSize: 28,
  fontWeight: 300,
  zIndex: 3,
  animation: "1s blink step-end infinite"
};

const footerStyle = {
  width: "100%",
  position: "fixed",
  bottom: 0,
  borderTop: "2px solid #ccd3d9",
  zIndex: 2
};

export const Footer = () => (
  <Fragment>
    <span style={cursorStyle}>|</span>
    <img src={footer} alt="" style={footerStyle} />
  </Fragment>
);
