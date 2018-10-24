import React, { Component } from 'react';
import WelcomeRecruiter from "./components/WelcomeRecruiter";
import ColoredLine from "../../components/ColoredLine";
import Header from "./components/Header";
import API from "../../utils/API";
import Thumbnail from "./components/Thumbnail";
import { Col, Row, Container } from "reactstrap";
import "./Projects.css";
// import withUser from "../../services/withUser";
// import projects from "../../projects.json";

class Projects extends Component {

  state = {
    recruiter: "",
    projects: [],
    recruiters: [],
  };

  
  componentDidMount() {
    this.getRecruiters();
    this.getProjects();
    // this.handleGetRecruiter()
    console.log(this.props.user)
  };

  getRecruiters = () => {
    API.getRecruiters()
      .then((res) => {
        console.log ("***********" + res.data) 
        this.setState({ recruiters: res.data });
      })
      .catch(err => console.log(err));
  };

  // handleGetRecruiter = id => {
  //   API.getRecruiter(id)
  //     .then(response => {
  //       this.setState({recruiter: response.data})
  //     })
  // };


  getProjects = () => {
    API.getProjects()
      .then((res) => {
        console.log ("***********" + res.data) 
        this.setState({ projects: res.data });
      })
      .catch(err => console.log(err));
  };

  getProject = id => {
    API.getProject(id)
      .then((res) => {
        console.log ("***********" + res.data) 
        this.setState({ projects: res.data});
      })
      .catch(err => console.log(err));
  };

  handleGetProjectClick = id => {
    API.getProject(id).then(res => this.getProject(id));
  };

  // handleClick() {
  //   console.log('this is the handle click this:', this);
  //   const newProject = { ...project };
  //   if (newProject._id === _id) {
  //     return newProject
  //   };
  // };

  render() {  
    const {user} = this.props
    console.log(this.state.recruiter)
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
          <Col md="12">
            <ColoredLine color="rgb(0, 188, 212)" />
          </Col>
        </Row>
        <Row>
          <Col size="col-xl-6 col-xl-offset-3 col-centered"> 
            {this.state.projects.map(thumbnail => (
              <Thumbnail
                handleGetProjectClick={this.handleGetProjectClick}
                key={thumbnail._id}
                _id={thumbnail._id}
                project_name={thumbnail.project_name}
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
