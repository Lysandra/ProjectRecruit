import React, { Component } from 'react';
import API from "../utils/API";

class Recruiters extends Component {

  state = {
    recruiters: [],
  };

  
  componentDidMount() {
    this.loadRecruiters();
  }

  loadRecruiters = () => {
    API.getRecruiters()
      .then((res) => {
        console.log ("***********" + res.data) 
        this.setState({ recruiters: res.data });
      })
      .catch(err => console.log(err));
  };


  render() {
    return (
      <div>
        This is the Recruiters Page - This is where the candidate profile summary data will appear at top of page and then rating data will apper at the bottom of the page.
      </div>
    );
  }
};

export default Recruiters;
