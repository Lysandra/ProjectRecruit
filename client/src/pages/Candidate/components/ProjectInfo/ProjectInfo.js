import React from "react";
import "./ProjectInfo.css";

const ProjectInfo = props => {
  return (
    <div className="project-info-wrap">
      <div className="project-wrapper">
        <p>{props.projectName}</p>
      </div>
      <p>{props.summary}</p>
      <p>{props.projectLink}</p>
      <p>{props.technologiesUsed}</p>
    </div>
  )
}
export default ProjectInfo;