import React from "react";
import { Link } from 'react-router-dom';
import "./LinktoProjects.css";

// The Thumbnail component renders a div that uses some CSS to render a background image
// It will always keep square proportions at any size without the image warping
// The "role" and "aria label" are there to identify the element's purpose as an image for accessibility purposes
const LinktoProjects = ({ first_name, last_name }) => (
  <Link to="/projects">
    <div className="linktoprojects">
      Thank you {first_name} {last_name} for attending Trilogy's Project Demo Day.  We are glad you here.  When you ready, click through!  You can review Candidate project, provide Candidate with ratings and feedback.  You can also identify potental recuits for your company.  Thank you and enjoy the show!
    </div>
  </Link>
);

export default LinktoProjects;