import React, { Component } from 'react';
import WelcomeRecruiter from "./components/WelcomeRecruiter";
import Header from "./components/Header";
import API from "../../utils/API";
import Thumbnail from "./components/Thumbnail";
import { Col, Row, Container } from "reactstrap";
// import projects from "../../projects.json";

class Projects extends Component {

  state = {
    recruiters: [],
    projects: []
  };

  
  componentDidMount() {
    this.getRecruiters();
    this.getProjects();
  }

  getRecruiters = () => {
    API.getRecruiters()
      .then((res) => {
        console.log ("***********" + res.data) 
        this.setState({ recruiters: res.data });
      })
      .catch(err => console.log(err));
  };

  getProjects = () => {
    API.getProjects()
      .then((res) => {
        console.log ("***********" + res.data) 
        this.setState({ projects: res.data });
      })
      .catch(err => console.log(err));
  };

  // getRecruiters = id => {
  //   const recruiter = this.state.recruiters.find(recruiter => recruiters._id === id);
  //   API.getRecruiter()
  //     .then((res) => {
  //       console.log ("***********" + res.data) 
  //       this.setState({ recruiters: res.data });
  //     })
  //     .catch(err => console.log(err));
  // };

  render() {
    return (
      <Container>
        <Row>
          <Col size="xl-6">
            {this.state.recruiters.map(welcomerecruiter => (
              <WelcomeRecruiter
                key={welcomerecruiter._id}
                _id={welcomerecruiter._id}
                first_name={welcomerecruiter.first_name}
                last_name={welcomerecruiter.last_name}
              />
            ))}
          </Col>
        </Row>
        <Row>
          <Col size="xl-6"> 
            {this.state.projects.map(thumbnail => (
              <Thumbnail
                key={thumbnail._id}
                _id={thumbnail._id}
                project_image={thumbnail.project_image}
              />
            ))}
          </Col>
        </Row>
      </Container>
    );
  }
};

export default Projects;
