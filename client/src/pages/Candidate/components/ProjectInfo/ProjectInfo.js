import React from "react";
import "./ProjectInfo.css";

const ProjectInfo = props => {
  return (
    <div className="project-info-wrap">
      
      <div>{props.project_name}</div>
      <div>{props.project_image}</div>
      <div>{props.summary}</div>
      <div>{props.project_link}</div>
      <div>{props.technologies_used}</div>
    </div>
  )
}
export default ProjectInfo;