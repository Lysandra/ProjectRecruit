import React from "react";
import "./ProjectInfo.css";

const ProjectInfo = props => {
  return (
    <div className="project-info-wrap">
      
      <div>{props.projectName}</div>
      <div>{props.summary}</div>
      <div>{props.projectLink}</div>
      <div>{props.technologiesUsed}</div>
    </div>
  )
}
export default ProjectInfo;