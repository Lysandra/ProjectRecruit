import React from "react";
import { Link } from 'react-router-dom';
import "./Feedback.css";

// The Thumbnail component renders a div that uses some CSS to render a background image
// It will always keep square proportions at any size without the image warping
// The "role" and "aria label" are there to identify the element's purpose as an image for accessibility purposes
const Feedback = () => (
  <div className="rating-container">
  <h5 className="h5-feedback">You may add Candidate feedback below.</h5>
  </div>
);

export default Feedback;