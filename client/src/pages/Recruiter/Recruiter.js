import React, { Component } from 'react';
import WelcomeRecruiter from "../../pages/Projects/components/WelcomeRecruiter";
import ColoredLine from "../../components/ColoredLine";
import API from "../../utils/API";
import Thumbnail from "./components/Thumbnail";
import { Col, Row, Container } from "reactstrap";

class Recruiter extends Component {

  state = {
    recruiters: [],
    projects: [],
  };

  
  componentDidMount() {
    this.getRecruiters();
    this.getProjects();
  };

  getRecruiters = () => {
    API.getRecruiters()
      .then((res) => {
        console.log ("***********" + res.data) 
        this.setState({ recruiters: res.data });
      })
      .catch(err => console.log(err));
  };

  getRecruiter = id => {
    API.getRecruiter(id)
      .then((res) => {
        console.log ("***********" + res.data) 
        this.setState({ recruiters: res.data});
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

export default Recruiter;
