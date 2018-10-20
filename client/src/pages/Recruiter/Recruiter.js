import React, { Component } from 'react';
import ColoredLine from "../../components/ColoredLine";
import ColoredVerticalLine from "../../components/ColoredVerticalLine";
import API from "../../utils/API";
import Thumbnail from "../../components/Thumbnail";
import Technologies from "./components/Technologies";
import Feedback from "./components/Feedback";
import OverallRating from "./components/OverallRating";
import { Col, Row, Container } from "reactstrap";
import "./Recruiter.css";

class Recruiter extends Component {

  state = {
    value: "",
    projects: [],
    recruiters: [],
  };

  componentDidMount() {
    this.getRecruiters();
    this.getProjects();
    this.handleGetRecruiter()
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

  handleGetRecruiter = id => {
    API.getRecruiter(id)
      .then(response => {
        this.setState({recruiter: response.data})
      })
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
  

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <Container>
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
        <Row>
          <Col>
            <ColoredLine color="rgb(0, 188, 212)" />
          </Col>
        </Row>
        <Row>
        <Col>
          <Technologies />
          <form onSubmit={this.handleSubmit}>
              <label>
                Creativity
                <select value={this.state.value} onChange={this.handleChange}>
                  <option value="1Star">1</option>
                  <option value="2Star">Two</option>
                  <option value="3Star">Three</option>
                  <option value="4Star">Four</option>
                  <option value="5Star">Five</option>
                </select>
                </label>
              <br />
              <label>
                User Experience
                <select value={this.state.value} onChange={this.handleChange}>
                  <option value="1Star">1</option>
                  <option value="2Star">Two</option>
                  <option value="3Star">Three</option>
                  <option value="4Star">Four</option>
                  <option value="5Star">Five</option>
                </select>
              </label><br />
              <label>
                Use of Tecnology
                <select value={this.state.value} onChange={this.handleChange}>
                  <option value="1Star">1</option>
                  <option value="2Star">Two</option>
                  <option value="3Star">Three</option>
                  <option value="4Star">Four</option>
                  <option value="5Star">Five</option>
                </select>
              </label><br />
              <label>
                Functionality
                <select value={this.state.value} onChange={this.handleChange}>
                  <option value="1Star">1</option>
                  <option value="2Star">Two</option>
                  <option value="3Star">Three</option>
                  <option value="4Star">Four</option>
                  <option value="5Star">Five</option>
                </select>
              </label><br /><br />
              
            </form>
            <Feedback />
            <textarea name="body" rows="4" cols="50"></textarea>
            <input type="submit" value="Submit" />
          </Col>
          <Col>
            <ColoredVerticalLine color="rgb(0, 188, 212)" />
          </Col>
          <Col>
            <OverallRating />  
          </Col>
          </Row>
      </Container>
    );
  }
}

export default Recruiter;