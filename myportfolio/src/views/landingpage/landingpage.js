import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import "./landingpage.scss";

export default class landingpage extends Component {
  render() {
    return (
      <React.Fragment>
        <Grid className="landing-grid">
          <Cell col={5}></Cell>
          <Cell col={7}>
            <div className="banner-text">
              <h1 className="anim-name">Joaquín Ferreira</h1>
              <hr className="anim-hr" />
              <h2 className="anim-h2">Multiplatform App Developer</h2>
              <br />
              <div className="social-link anim-socialLinks">
                <a
                  href="https://github.com/JoaquinFG"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
                <a
                  href="https://twitter.com/Joakin_FG"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-twitter-square" aria-hidden="true" />
                </a>
                <a
                  href="https://www.linkedin.com/in/joaquinferreirag/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                <a
                  href="https://www.facebook.com/joaquin.fg.16"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-facebook-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </React.Fragment>
    );
  }
}
