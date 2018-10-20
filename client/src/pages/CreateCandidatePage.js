import axios from 'axios';
import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import CreateProjectPage from "./CreateProjectPage";

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
    error: null,
    project_name: null,
    project_image: null,
    project_link: null,
    summary: null,
    technologies_used: null,
    partOneComplete: false
  }
  handleInputChanged = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  completePartOne = () => {
    const { email, password} =this.state
    console.log("click")
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
    this.setState({partOneComplete:true})
  }
  handleLogin = (event) => {
    event.preventDefault();

    const { password, firstName, lastName, position, phone, email, linkedIn, profileUrl, project_name, project_image, project_link, summary, technologies_used } = this.state;
    const { history } = this.props;

    

    // post an auth request
    axios.post('/api/users/candidate', {
      firstName,
      lastName,
      password,
      email,
      position,
      phone,
      linkedIn,
      profileUrl,
      project_name,
      project_image,
      project_link,
      summary,
      technologies_used

    })
      .then(user => {
        // if the response is successful, make them log in
        history.push('/login');
      })
      // .catch(err => {

      //   this.setState({
      //     error: err.response.data.message || err.message
      //   });
      // });
  }
  render() {
    const { error, partOneComplete, project_name, project_image, project_link, summary, technologies_used } = this.state;
      if (partOneComplete){
        return (
          <CreateProjectPage
            onSubmit={this.handleLogin}
            handleInputChanged={this.handleInputChanged}
            project_name={project_name}
            project_image={project_image}
            project_link={project_link}
            summary={summary}
            technologies_used={technologies_used}
          />
        )
      }
    return (
      
      <Grid fluid>
        <Row>
          <Col xs={6} xsOffset={3}>
            <form>
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
                <RaisedButton primary onClick={this.completePartOne}>
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
