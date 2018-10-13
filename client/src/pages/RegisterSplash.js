import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';

class RegisterSplash extends Component {
  render(){
    return (
    <div>
      <p>
        <Link to="/create/recruiter">
        I'm a Recruiter
        </Link>
      </p>
      <p>
        <Link to="/create/candidate">
        I'm a Candidate
        </Link>
      </p>
    </div>
    )
  }
}
export default RegisterSplash;