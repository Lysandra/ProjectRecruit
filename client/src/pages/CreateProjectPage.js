import axios from 'axios';
import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class CreateProjectPage extends Component {
  state = {
    project_name: null,
    project_image: null,
    project_link: null,
    summary: null,
    technologies_used: null
  }
  handleInputChanged = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleSubmit = (event) => {
    event.preventDefault();

    const { project_name, project_link, project_image, summary, technologies_used } = this.state;
    const { history } = this.props;

    // clear any previous errors so we don't confuse the user
    this.setState({
      error: null
    });

    // check to make sure they've entered a username and password.
    // this is very poor validation, and there are better ways
    // to do this in react, but this will suffice for the example
    if (!project_name || !project_link || !project_image || !summary || !technologies_used) {
      this.setState({
        error: 'A Project Name, Project Link, Project Image, Summary, Technologies Used is required.'
      });
      return;
    }
    console.log("calling API")
    // post an auth request
    axios.post('/api/users/project', {
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
    const { error } = this.state;

    return (
      <Grid fluid>
        <Row>
          <Col xs={6} xsOffset={3}>
            <form onSubmit={this.handleSubmit}>
              <h1>Add Project</h1>
              {error &&
                <div>
                  {error}
                </div>
              }
              
              <div>
              <TextField
                  name="project_name"
                  hintText="Your Project Name"
                  floatingLabelText="Your Project Name"
                  type="project_name"
                  onChange={this.handleInputChanged}
                />
              </div>
              <div>
              <TextField
                  name="project_image"
                  hintText="Your Project Picture"
                  floatingLabelText="Your Project Picture"
                  type="project_image"
                  onChange={this.handleInputChanged}
                />
              </div>
              <div>
                <TextField
                  name="project_link"
                  hintText="Your Project link"
                  floatingLabelText="Your Project link"
                  type="project_link"
                  onChange={this.handleInputChanged}
                  
                />
              </div>
              <div>
                  <TextField
                  name="summary"
                  hintText="Project Summary"
                  floatingLabelText="Project Summary"
                  type="summary"
                  onChange={this.handleInputChanged}

                  />
              </div>
              <div>
                  <TextField
                    name="technologies_used"
                    hintText="Technologies Used"
                    floatingLabelText="Technologies Used"
                    type="technologies_used"
                    onChange={this.handleInputChanged}

                  />
              </div>
    
              <div>
                <RaisedButton primary type="submit">
                  Add Project
                </RaisedButton>
              </div>
            </form>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default CreateProjectPage;
