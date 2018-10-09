import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container, Jumbotron} from "reactstrap";

//import API from "../../utils/API";
import "./Projects.css";
import Thumbnail from "../../components/Thumbnail";
import projects from "./projects.json";


class Projects extends Component {
  state = {
    projects
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  // componentDidMount() {
  //   API.getProjects(this.props.match.params.id)
  //     .then(res => this.setState({ projects: res.data }))
  //     .catch(err => console.log(err));
  // }

  // removeFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const friends = this.state.friends.filter(friend => friend.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ friends });
  // };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col md="6" sm="12">
          <Jumbotron>
              <h1>Trilogy Demo Day</h1>
          </Jumbotron>     
          </Col>
        </Row>
        <Row>
          <Col md="6" sm="12">
            <article>
              <h2>UCF Coding Boot Camp</h2>
              <h3>Melrose Center Orlando Public Library</h3>
              <h3>101 East Central Blvd.</h3>
              <h3>Orlando, FL 32801</h3>
            </article>
          </Col>
        </Row>
        <Row>
        {this.state.projects.map(project => (
          <Thumbnail         
            id={project.id}
            key={project.id}
            projectName={project.projectName}
            projectImage={project.projectImage}
          />
        ))};            
        </Row>
      </Container>
    );
  }
}

export default Projects;

{/* <Link to="/">← Back to Authors</Link> */}
