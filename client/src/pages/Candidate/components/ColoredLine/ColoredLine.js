import React from "react";
import "./ColoredLine.css";

const ColoredLine = ({ color }) => (
  <hr
      style={{
          color: color,
          backgroundColor: color,
          height: 5
      }}
  />
);
export default ColoredLine;