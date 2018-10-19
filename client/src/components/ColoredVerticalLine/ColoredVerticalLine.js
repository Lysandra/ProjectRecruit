import React from "react";
import "./ColoredVerticalLine.css";

const ColoredVerticalLine = ({ color }) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: 500,
      left: .3,
      width: 5,
    }}
  />
);

export default ColoredVerticalLine;