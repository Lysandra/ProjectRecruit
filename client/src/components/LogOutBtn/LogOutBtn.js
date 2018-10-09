import React from "react";
import "./LogOutBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const LogOutBtn = props => (
  <button className="logout-btn" {...props}>
    Log Out
  </button>
);

export default LogOutBtn;
