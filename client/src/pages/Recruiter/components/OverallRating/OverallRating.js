import React from "react";
import { Link } from 'react-router-dom';
import "./OverallRating.css";

// The Thumbnail component renders a div that uses some CSS to render a background image
// It will always keep square proportions at any size without the image warping
// The "role" and "aria label" are there to identify the element's purpose as an image for accessibility purposes
const OverallRating = () => (
  <div className="overallrating-container">
  <h5>Candidate's overall average rating:</h5>
  </div>
);

export default OverallRating;