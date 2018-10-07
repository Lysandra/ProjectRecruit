import React from "react";
import "./Thumbnail.css";

const Thumbnail = props => (
  <div className="thumbnail">
    <div className="thumbnail-container">
      <img alt={props.projectName} src={props.projectImage}  />
    </div>
    <div className="content">
      <p><strong>{props.projectName}</strong></p>
    </div>
    {/* <span onClick={() => props.removeFriend(props.id)} className="remove">
      𝘅
    </span> */}
  </div>
);

export default Thumbnail;

// const Thumbnail = props => (
//   <div
//     className="thumbnail"
//     role="img"
//     aria-label="Recipe Image"
//     style={{
//       backgroundImage: `url(${props.src})`
//     }}
//   />
// );

// export default Thumbnail;