import React from "react";

const JumbotronLeft = ({ children }) => (
  <div
    style={{ height: "100%", width: "50%", backgroundColor: "purple", paddingTop: 8, textAlign: "center", color: "white"}}
    className="jumbotronleft"
  >
    {children}
  </div>
);

export default JumbotronLeft;
