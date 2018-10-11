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
    candidates: [],
  };

  
  componentDidMount() {
    this.loadCandidates();
  }

  loadCandidates = () => {
    API.getCandidates()
      .then((res) => {
        console.log ("***********" + res.data) 
        this.setState({ candidates: res.data });
      })
      .catch(err => console.log(err));
  };

  render() {
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
              profileImage="https://lh3.googleusercontent.com/-z-h2bK8PjKY/AAAAAAAAAAI/AAAAAAAAYNg/iNq2qBxNnFw/s640-il/photo.jpg"     
            />
          </Col>
          <Col md="5">
            <ProfileInfo
              firstName="Cristy"
              lastName="Sillerico"
              title="Full Stack Software Engineer"
              email="cristysillerico@gmail.com"
              phoneNumber="407-717-9056"
              linkedIn="https://www.linkedin.com/feed/"
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
              projectName="Project Name"             
              summary="This is the summary of our project. We will go on and on on how great it is and how it will help you in the future."
              projectLink="Project Link"
              technologiesUsed="React | React Native | Node JS| MongoDB"
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
