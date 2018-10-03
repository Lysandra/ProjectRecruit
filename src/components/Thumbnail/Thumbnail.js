import React from "react";
import "./Thumbnail.css";


// const Thumbnail = ({ children }) => (
//   <img src="/img/thumbnail.png" circle alt="242x200" 
//     style={{ height: 75, paddingTop: 8, textAlign: "center" }}
//     className="thumbnail"
//   >
//   {{ children }}
//   </img>
// );

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