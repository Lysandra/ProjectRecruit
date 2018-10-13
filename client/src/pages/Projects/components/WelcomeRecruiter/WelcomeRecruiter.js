import React from "react";
import "./WelcomeRecruiter.css";

const WelcomeRecruiter = ({ _id, first_name, last_name }) => {
  return (
    <div className="welcomerecruiter">
    <h6>Welcome {first_name} {last_name} to Trilogy's Project Demo Day!</h6>
    <p>UCF Coding Boot Camp</p>
    <p>Orlando Public Library</p>
    <p>101 East Central Blvd.</p>
    <p>Orlando, FL 32801</p>
    <br />
    <p>As you meet potential candidates, you can review addtional project details by clicking on their Project below!</p>
    </div>

  )
};

export default WelcomeRecruiter;