import React, { Component } from "react";
import ProjectName from "./components/ProjectName";
import LogOutBtn from "../../components/LogOutBtn";
import ProfilePicture from "./components/ProfilePicture";
import ProfileInfo from "./components/ProfileInfo"
import "./Candidate.css";

// import DeleteBtn from "../../components/DeleteBtn";

// import API from "../../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "reactstrap";
// import { List, ListItem } from "../../components/List";
// import { Input, TextArea, FormBtn } from "../../components/Form";

class Candidate extends Component {

  render() {
    return (
      <Container>
        <Row>
          <div className="top-wrapper">
            <ProjectName
              image="https://secure.i.telegraph.co.uk/multimedia/archive/03600/potd-squirrels_3600130k.jpg"
              name="Project Name"
            />
            <LogOutBtn />
          </div>
        </Row>
        <Row>
          <Col md={{size:3,offset:2}}>
            <ProfilePicture
              image="https://i.pinimg.com/236x/42/ac/0a/42ac0a917dc7d8e2f85a2827bde97b76--profile-pictures.jpg"     
            />
          </Col>
          <Col md="7">
            <ProfileInfo
              firstName="Cristy"
              lastName="Sillerico"
              title="Best"
              email="cristysillerico@gmail.com"
              phoneNumber="323232"
              linkedIn="Cristy Sillerico"
            />
          </Col>
        </Row>     
        <Row>Bottom</Row>       
      </Container>
    );
  }
}

export default Candidate;
