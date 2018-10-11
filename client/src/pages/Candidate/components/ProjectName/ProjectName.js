import React from "react";
import "./ProjectName.css";

const ProjectName = props => {
  return (
    <div className="wrapper"> 
      <img className="project-image" src={props.projectImage} />
      <p>{props.projectName}</p>
    </div>
  )
}
export default ProjectName;