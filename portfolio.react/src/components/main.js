import React from 'react'
import { Switch , Route } from 'react-router-dom';
import LandingPage from "../views/landingpage/landingpage.js";
import AboutMe from "../views/aboutme/aboutme.js";
import Contact from "../views/contact/contact.js";
import Resume from "../views/resume/resume.js";
import Projects from "../views/projects/projects.js";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/contact" component={Contact} />
    <Route path="/resume" component={Resume} />
    <Route path="/projects" component={Projects} />
  </Switch>
);

export default Main;