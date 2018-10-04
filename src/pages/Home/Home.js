import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
import JumbotronLeft from "../../components/JumbotronLeft";
// import API from "../../utils/API";
// import { Link } from "react-router-dom";
 import { Col, Row, SectionRight, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
// import { Input, TextArea, FormBtn } from "../../components/Form";
import Title from "../../components/Title";
import LogInBtn from "../../components/LogInBtn";
import "./Home.css";

class Home extends Component {

  render() {
    return (
    <Container>
      <SectionRight><a href="https://www.trilogyed.com/"><img src="/img/trilogy2.jpg" alt="trilogy" className="logo" /></a>
        <Title>Welcome to Project Recruit</Title>
        <LogInBtn>Students</LogInBtn>
      </SectionRight>
      <LogInBtn>Students</LogInBtn>
    </Container>
    );
  }
}

export default Home;

/* <Row>
<article className="left">
<Col size="md-6">         
  <LogInBtn>Candidates</LogInBtn>
</Col>
</article>
<Col size="md-12"><LogInBtn>Recruiters</LogInBtn></Col>
</Row>
<Title>Welcome to Project Recruit</Title> */