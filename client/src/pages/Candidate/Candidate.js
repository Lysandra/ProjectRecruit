import React, { Component } from "react";
import ProjectName from "./components/ProjectName";
import LogOutBtn from "../../components/LogOutBtn";
import SaveBtn from "../../components/SaveBtn"
import ProfilePicture from "./components/ProfilePicture";
import ProfileInfo from "./components/ProfileInfo";
import ColoredLine from "./components/ColoredLine";
import ProjectInfo from "./components/ProjectInfo";
import API from "../../utils/API";


import "./Candidate.css";

// import DeleteBtn from "../../components/DeleteBtn";

// import API from "../../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "reactstrap";
// import { List, ListItem } from "../../components/List";
// import { Input, TextArea, FormBtn } from "../../components/Form";

class Candidate extends Component {

  state = {
    candidate: undefined,
    project: undefined,
  };

  
  componentDidMount() {
    this.loadCandidate();
  }

  loadCandidate = () => {
    API.getCandidate()
      .then((res) => {
        console.log ("***********" + res.data) 
        if (res.data) {
        this.setState({ candidate: res.data.candidate, project: res.data.project });
        }
        
      })
      .catch(err => console.log(err));

  };

  render() {
    const { candidate, project } =this.state;
    if (!candidate) return null;
    return (
      <Container>
        <Row>
          <div className="top-wrapper">
            <ProjectName
              projectImage="https://savcoop.nuntanacloudservice.com/images/news_photo/I0000054.png"
              projectName="Project Name"
            />
            <LogOutBtn />
          </div>
        </Row>
        <Row>
          <Col md={{size:3,offset:2}}>
            <ProfilePicture
              profileImage={candidate.profileUrl}
            />  
          </Col>
          <Col md="5">
            <ProfileInfo
              firstName={candidate.firstName}
              lastName={candidate.lastName}
              position={candidate.position}
              email={candidate.email}
              phone={candidate.phone}
              linkedIn={candidate.linkedIn}
            />
          </Col>
        </Row>   
        <Row>
          <Col md="12">
            <ColoredLine color="rgb(0, 188, 212)" />
          </Col>
        </Row>
        <Row>
          <Col md={{size:6,offset:3}}>
            <ProjectInfo
            project_name={project.project_name}
            project_image={project.project_image}
            project_link={project.project_link}
            technologies_used={project.used} 
            />
          </Col>
        </Row> 
        <Row>
            <Col md="11">
              <SaveBtn />
            </Col>
        </Row>  

      </Container>
    );
  }
}
export default Candidate;
