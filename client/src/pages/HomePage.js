import axios from 'axios';
import React, { Component, Fragment } from 'react';
import { List, ListItem } from 'material-ui/List';
import { withUser } from '../services/withUser';
import { Link } from 'react-router-dom';
import { Col, Row, Container } from "reactstrap";
import LinktoProjects from "../components/LinktoProjects"

class HomePage extends Component {
  state = {
    stuff: null
  }
  componentDidMount() {
    // only try loading stuff if the user is logged in.
    if (!this.props.user) {
      return;
    }

    axios.get('/api/stuff')
      .then(res => {
        this.setState({
          stuff: res.data
        });
      })
      .catch(err => {
        // if we got an error, we'll just log it and set stuff to an empty array
        console.log(err);
        this.setState({
          stuff: []
        });
      });
  }
  
  render() {
    const { user } = this.props; // get the user prop from props
    const { stuff } = this.state; // get stuff from state
    console.log(user)

    return (
      <Container>
      <Fragment>
        {user && stuff &&
          <div>
            Welcome {user.email}!
            <Row>
            <Col md={{size:12}}>
                <LinktoProjects></LinktoProjects>
              </Col>
            </Row>
            <Row>
              <Col>
              <a href="https://www.trilogyed.com/"><img src="../img" alt="trilogy" className="logo" /></a>
              </Col>
            </Row>
          </div>
        }
        {user && !stuff &&
          <div>Hold on, looking for your stuff...</div>
        }
        {!user &&
          <div> Welcome! Please Register and log in using the link above!</div>
        }
      </Fragment>   
        
      </Container>
    );
  }
}

// withUser function will wrap the specified component in another component that will
// inject the currently logged in user as a prop called "user"
export default withUser(HomePage);
