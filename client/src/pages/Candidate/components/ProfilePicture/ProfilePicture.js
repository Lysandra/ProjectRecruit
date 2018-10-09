import React from "react";
import "./ProfilePicture.css";

const ProfilePicture = props => {
  return (
    <div className="wrap"> 
      <img className="profile-image" src={props.image} />      
    </div>
  )
}
export default ProfilePicture;