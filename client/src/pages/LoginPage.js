import axios from 'axios';
import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { update } from '../services/withUser';

class LoginPage extends Component {
  state = {
    email: null,
    password: null
  }
  handleInputChanged = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleLogin = (event) => {
    event.preventDefault();

    const { email, password } = this.state;
    const { history } = this.props;
    console.log(email)
    console.log(password)
    // post an auth request
    axios.post('/api/auth', {
      email,
      password
    })
    .then(user => {
      // if the response is successful, update the current user and redirect to the home page
      update(user.data);
      history.push('/projects');
    })
    .catch(err => {
      // an error occured, so let's record the error in our state so we can display it in render
      // if the error response status code is 401, it's an invalid username or password.
      // if it's any other status code, there's some other unhandled error so we'll just show
      // the generic message.
      this.setState({
        error: err.response.status === 401 ? 'Invalid email or password.' : err.message
      });
    });
  }
  render() {
    const { error } = this.state;

    return (
      <Grid fluid>
        <Row>
          <Col xs={6} xsOffset={3}>
            <form onSubmit={this.handleLogin}>
              <h1>Log In</h1>
              {error &&
                <div>
                  {error}
                </div>
              }
              <div>
                <TextField
                  name="email"
                  hintText="Email"
                  floatingLabelText="Email"
                  type="email"
                  onChange={this.handleInputChanged}
                />
              </div>
              <div>
                <TextField
                  name="password"
                  hintText="Password"
                  floatingLabelText="Password"
                  type="password"
                  onChange={this.handleInputChanged}
                />
              </div>
              <div>
                <RaisedButton primary type="submit">
                  Log In
                </RaisedButton>
              </div>
              <p>
                or
              </p>
              <p>
                <Link to="/create">
                Register
                </Link>
              </p>
            </form>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default LoginPage;
