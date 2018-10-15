import React, { Component } from 'react';
import WelcomeRecruiter from "./components/WelcomeRecruiter";
import Header from "./components/Header";
import API from "../../utils/API";
import Thumbnail from "./components/Thumbnail";
import { Col, Row, Container } from "reactstrap";
import withUser from "../../services/withUser";
// import projects from "../../projects.json";

class Projects extends Component {

  state = {
    recruiters: [],
    projects: [],
    // users: []
  };

  
  componentDidMount() {
    this.getRecruiters();
    this.getProjects();
  };

  // componentDidMount() {
  //   // only try loading stuff if the user is logged in.
  //   if (!this.props.user) {
  //     return;
  //   }

  //   axios.get('/api/stuff')
  //     .then(res => {
  //       this.setState({
  //         stuff: res.data
  //       });
  //     })
  //     .catch(err => {
  //       // if we got an error, we'll just log it and set stuff to an empty array
  //       console.log(err);
  //       this.setState({
  //         stuff: []
  //       });
  //     });
  // }

  // getCurrentUser = () => {
  //   API.getCurrentUser()
  //   console.log(user)
  //     .then((res) => {
  //       console.log ("***********" + res.data) 
  //       this.setState({ user: res.data });
  //     })
  //     .catch(err => console.log(err));
  // };

  

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

  getRecruiter = id => {
    // const recruiter = this.state.recruiters.find(recruiter => recruiters._id === id);
    API.getRecruiter(id)
      .then((res) => {
        console.log ("***********" + res.data) 
        this.setState({ recruiters: res.data});
      })
      .catch(err => console.log(err));
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
          <Col size="xl-6"> 
            {this.state.projects.map(thumbnail => (
              <Thumbnail
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
