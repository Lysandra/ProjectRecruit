import React, { Component } from 'react';
import API from "../../utils/API";
import Thumbnail from '../../components/Thumbnail';

class Projects extends Component {

  state = {
    projects: [],
  };

  
  componentDidMount() {
    this.loadProjects();
  }

  loadProjects = () => {
    API.getProjects()
      .then((res) => {
        console.log ("***********" + res.data) 
        this.setState({ projects: res.data });
      })
      .catch(err => console.log(err));
  };


  render() {
    return (
      <div>
        <Thumbnail src="/thumbnaildiv.png" alt="242x200">
        This is the Projects page where all Project Thumbnails and Titles will be displayed so a Recruiter can click the Projects to display the Recruiter page for rating.
        </Thumbnail>
      </div>
    );
  }
};

export default Projects;