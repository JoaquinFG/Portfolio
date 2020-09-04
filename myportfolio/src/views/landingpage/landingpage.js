import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import "./landingpage.css";
import Avatar from "../../img/avatar.png";

export default class landingpage extends Component {
  render() {
    return (
      <React.Fragment className="landingpage">
        <Grid className="landing-grid">
          <Cell col={7}>
            <div className="banner-text">
              <h2>Joaquín Ferreira García</h2>
              <hr />
              <h1>Full Stack Web Developer</h1>
              <hr />
              
              <p>HTML/CSS | Bootstrap | JavaScript | React | NodeJS</p>
              <div className="social-link">
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-youtube-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
          <Cell col={3}>
            <img className="avatar-land" src={Avatar} alt="Avatar"/>
          </Cell>
        </Grid>
      </React.Fragment>
    );
  }
}
