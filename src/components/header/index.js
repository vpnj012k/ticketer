import * as React from "react";
import header from "assets/header.png";

const headerStyle = {
  width: "100%",
  position: "fixed",
  top: 0,
  zIndex: 2
};

export const Header = () => <img src={header} alt="" style={headerStyle} />;
