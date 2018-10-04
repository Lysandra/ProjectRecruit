import React, { Component } from "react";
import ProjectName from "./components/ProjectName";
import LogOutBtn from "../../components/LogOutBtn";
import "./Candidate.css";

// import DeleteBtn from "../../components/DeleteBtn";

// import API from "../../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
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
            name="Tim"
          />
          <LogOutBtn />
          </div>
    
  
        </Row>
        <Row>Bottom</Row>
        
      </Container>
    );
  }
}

export default Candidate;
