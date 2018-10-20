import axios from 'axios';
import React, { Component, Fragment } from 'react';
import { List } from 'material-ui/List';
import { withUser } from '../services/withUser';
import {Cell, Grid} from 'react-mdl'
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
        <div>
          <Grid className="landing-grid">
          <Cell col={12}>
              <img
                  src="https://pbs.twimg.com/profile_images/978374211801665538/Scj1ltjx_400x400.jpg"
                  alt="trilogy"
                  className="trilogy-image"
          
              />

              <div className="banner-text">
                <h3>Welcome to Project Recruit</h3>

                <hr/>
                <p> Please Register and Log in Using The Link Above </p>
                <p> Follow Us on Social Media </p>

              <div className="social-links">
                
                <a href="http://facebook.com" rel="noopener noreferrer" target="_blank">
                  <i className="fab fa-facebook-square" aria-hidden="true"/>
                </a>

                <a href="http://youtube.com" rel="noopener noreferrer" target="_blank">
                  <i className="fab fa-youtube" aria-hidden="true"/>
                </a>

                <a href="http://twitter.com" rel="noopener noreferrer" target="_blank">
                  <i className="fab fa-twitter-square" aria-hidden="true"/>
                </a>
                
                {/* <h6>Follow Us!</h6> */}

              </div>
        </div>
          </Cell>
          </Grid>
        </div>

        {user && stuff &&
          <div>

            Welcome back, {user.email}!
            <List>
              {/* {stuff.map((s, i) => <ListItem key={i} primaryText={s} />)} */}
            </List>

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
        {/* {!user &&
          <div> Welcome! Please Register and log in using the link above!</div>

        } */}

      </Fragment>
        
      </Container>

    );
  }
}

// withUser function will wrap the specified component in another component that will
// inject the currently logged in user as a prop called "user"
export default withUser(HomePage);
