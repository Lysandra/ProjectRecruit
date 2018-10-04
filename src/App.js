import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Candidate from "./pages/Candidate";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
// import logo from './logo.svg';
import './App.css';

const App = () => (  
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/candidate" component={Candidate} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
