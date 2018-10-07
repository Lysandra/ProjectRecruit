import React from "react";
import "./ProjectName.css";

const ProjectName = props => {
  return (
    <div className="wrapper"> 
      <img className="project-image" src={props.image} />
      <p>{props.name}</p>
    </div>
  )
}
export default ProjectName;