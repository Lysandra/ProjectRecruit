import React, { Component } from 'react';
import ColoredLine from "../../components/ColoredLine";
import ColoredVerticalLine from "../../components/ColoredVerticalLine";
import API from "../../utils/API";
import Thumbnail from "./components/Thumbnail";
import Technologies from "./components/Technologies";
import Feedback from "./components/Feedback";
import { Col, Row, Container } from "reactstrap";
import "./Recruiter.css";

class Recruiter extends Component {

  state = {
      value: "",
    }
  
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
                </label><br />
                <input type="submit" value="Submit" />
              </form>
              <Feedback />
              <textarea name="body"></textarea>
            </Col>
            <Col>
              <ColoredVerticalLine color="rgb(0, 188, 212)" />
            </Col>
            </Row>
        </Container>
      );
    }
  }

export default Recruiter;