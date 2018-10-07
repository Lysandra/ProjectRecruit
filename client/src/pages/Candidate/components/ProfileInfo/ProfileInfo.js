import React from "react";
import "./ProfileInfo.css";

const ProfileInfo = props => {
  return (
    <div className="profile-info-wrap">
      <div className="name-wrapper">
        <p>{props.firstName}</p>
        <p>{props.lastName}</p>
      </div>
      <p>{props.title}</p>
      <p>{props.email}</p>
      <p>{props.phoneNumber}</p>
      <p>{props.linkedIn}</p>
    </div>
  )
}
export default ProfileInfo;