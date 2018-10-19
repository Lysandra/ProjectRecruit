import React from "react";
import "./ProfilePicture.css";

const ProfilePicture = props => {
  return (
    <div className="wrap"> 
      <img className="profile-image" src={props.profileImage} />      
    </div>
  )
}
export default ProfilePicture;