import React from "react";
import "./Thumbnail.css";

// The Thumbnail component renders a div that uses some CSS to render a background image
// It will always keep square proportions at any size without the image warping
// The "role" and "aria label" are there to identify the element's purpose as an image for accessibility purposes
const Thumbnail = ({ project_name, project_image }) => (
  <div 
    className="thumbnail"
    role="img"
    aria-label="Project Image">   
    <img alt={project_name} src={project_image} />
    <p className="p_thumbnail">{project_name}</p>
  </div>
);

export default Thumbnail;