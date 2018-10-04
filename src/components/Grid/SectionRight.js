import React from "react";

export const SectionRight = ({ children }) => (
  <div
    style={{ height: "100vh", width: "50%", backgroundColor: "white", textAlign: "center", color: "white"}}
    className="sectionright"
  >
    {children}
  </div>
);