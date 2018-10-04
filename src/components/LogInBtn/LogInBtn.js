import React from "react";
import "./LogInBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const LogInBtn = ({ children }) => (
  <span 
    className="login-btn"
  >
    {children}
  </span>
);

export default LogInBtn;
