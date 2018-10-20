import axios from 'axios';
import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class CreateAccountPage extends Component {
  state = {
    password: null,
    email: null,
    firstName: null,
    lastName: null,
    position: null,
    phone: null,
    linkedIn: null,
    profileUrl: null,
    error: null
  }
  handleInputChanged = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleLogin = (event) => {
    event.preventDefault();

    const { password, firstName, lastName, position, phone, email, linkedIn, profileUrl } = this.state;
    const { history } = this.props;

    // clear any previous errors so we don't confuse the user
    this.setState({
      error: null
    });

    // check to make sure they've entered a username and password.
    // this is very poor validation, and there are better ways
    // to do this in react, but this will suffice for the example
    if (!email || !password) {
      this.setState({
        error: 'A email and password is required.'
      });
      return;
    }

    // post an auth request
    axios.post('/api/users/candidate', {
      firstName,
      lastName,
      password,
      email,
      position,
      phone,
      linkedIn,
      profileUrl

    })
      .then(user => {
        // if the response is successful, make them log in
        history.push('/create/project');
      })
      // .catch(err => {

      //   this.setState({
      //     error: err.response.data.message || err.message
      //   });
      // });
  }
  render() {
    const { error } = this.state;

    return (
      
      <Grid fluid>
        <Row>
          <Col xs={6} xsOffset={3}>
            <form onSubmit={this.handleLogin}>
              <h1>Create Account</h1>
              {error &&
                <div>
                  {error}
                </div>
              }
              <div>
                <TextField
                  name="email"
                  hintText="email"
                  floatingLabelText="email"
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
                <TextField
                  name="firstName"
                  hintText="First Name"
                  floatingLabelText="First Name"
                  type="firstName"
                  onChange={this.handleInputChanged}
                />
              </div>
              <div>
                <TextField
                  name="lastName"
                  hintText="Last Name"
                  floatingLabelText="Last Name"
                  type="lastName"
                  onChange={this.handleInputChanged}
                />
              </div>
              <div>
                <TextField
                  name="position"
                  hintText="Position"
                  floatingLabelText="Position"
                  type="position"
                  onChange={this.handleInputChanged}
                />
              </div>
              <div>
                <TextField
                  name="phone"
                  hintText="8675309"
                  floatingLabelText="8675309"
                  type="phone"
                  onChange={this.handleInputChanged}
                />
              </div>
              <div>
                <TextField
                  name="linkedIn"
                  hintText="linkedin.com/YourName"
                  floatingLabelText="linkedin.com/YourName"
                  type="linkedIn"
                  onChange={this.handleInputChanged}
                />
              </div>
              <div>
                <TextField
                  name="profileUrl"
                  hintText="Your Profile Picture"
                  floatingLabelText="Your Profile Picture"
                  type="profileUrl"
                  onChange={this.handleInputChanged}
                />
              </div>
          
              <div>
                <RaisedButton primary type="submit">
                  Create Account
                </RaisedButton>
              </div>
            </form>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default CreateAccountPage;
