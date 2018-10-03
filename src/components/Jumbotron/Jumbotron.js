import React from "react";

const Jumbotron = ({ children }) => (
  <div
    style={{ height: 75, backgroundColor: "#14c5e5", paddingTop: 8, textAlign: "center", color: "white"}}
    className="jumbotron"
  >
    {children}
  </div>
);

export default Jumbotron;
