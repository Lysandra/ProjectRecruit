import axios from 'axios';
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Navbar from './components/Navbar';

import { withUser, update } from './services/withUser';

import CreateCandidatePage from './pages/CreateCandidatePage';
import CreateRecruiterPage from './pages/CreateRecruiterPage';
import CreateProjectPage from './pages/CreateProjectPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Candidate from './pages/Candidate';
import NotFoundPage from './pages/NotFoundPage';
import Projects from './pages/Projects';
import Recruiter from './pages/Recruiter';
import RegisterSplash from './pages/RegisterSplash';

class App extends Component {
  componentDidMount() {
    // this is going to double check that the user is still actually logged in
    // if the app is reloaded. it's possible that we still have a user in sessionStorage
    // but the user's session cookie expired.
    axios.get('/api/auth')
      .then(res => {
        // if we get here, the user's session is still good. we'll update the user
        // to make sure we're using the most recent values just in case
        update(res.data);
      })
      .catch(err => {
        // if we get a 401 response, that means the user is no longer logged in
        if (err.response.status === 401) {
          update(null);
        }
      });
  }
  render() {
    const { user } = this.props;
    return (
      <Router>
        <MuiThemeProvider>
          <Fragment>
            <Navbar
              user={user}
            />
            
            <Switch>
              <Route exact path="/" render={() => <HomePage user={user}/>} />
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/create" component={RegisterSplash} />
              <Route exact path="/create/candidate" component={CreateCandidatePage} />
              <Route exact path="/create/recruiter" component={CreateRecruiterPage} />
              <Route exact path="/create/project" component={CreateProjectPage} />
              <Route exact path="/candidate" component={Candidate} />       
              <Route exact path="/projects" render={() => <Projects user={user}/>} />
              <Route exact path="/recruiter" component={Recruiter}/>} />
              <Route component={NotFoundPage} />
            </Switch>
          </Fragment>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default withUser(App);
