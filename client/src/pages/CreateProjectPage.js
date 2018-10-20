import axios from 'axios';
import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class CreateProjectPage extends Component {
  render() {
    const { error } = this.props;

    return (
      <Grid fluid>
        <Row>
          <Col xs={6} xsOffset={3}>
            <form onSubmit={() => this.props.handleSubmit}>
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
                  onChange={this.props.handleInputChanged}
                />
              </div>
              <div>
              <TextField
                  name="project_image"
                  hintText="Your Project Picture"
                  floatingLabelText="Your Project Picture"
                  type="project_image"
                  onChange={this.props.handleInputChanged}
                />
              </div>
              <div>
                <TextField
                  name="project_link"
                  hintText="Your Project link"
                  floatingLabelText="Your Project link"
                  type="project_link"
                  onChange={this.props.handleInputChanged}
                  
                />
              </div>
              <div>
                  <TextField
                  name="summary"
                  hintText="Project Summary"
                  floatingLabelText="Project Summary"
                  type="summary"
                  onChange={this.props.handleInputChanged}

                  />
              </div>
              <div>
                  <TextField
                    name="technologies_used"
                    hintText="Technologies Used"
                    floatingLabelText="Technologies Used"
                    type="technologies_used"
                    onChange={this.props.handleInputChanged}

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
