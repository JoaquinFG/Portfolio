import React, { Component } from "react";
import { Grid } from "react-mdl";
import "./landingpage.scss";
import Avatar from "../../img/avatar.png";
import Carousel from "../../components/carousel/carousel.js";

export default class landingpage extends Component {
  render() {
    return (
      <React.Fragment>
        <Grid className="landing-grid">
          <div className="row">
            <div className="col-xl-10 col-lg-12 banner-text">
              <h1>Joaquín Ferreira</h1>
              <hr />
              <h2>Multiplatform App Developer</h2>
              <br />
              <div className="social-link">
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
            <div className="col-2 banner-text">
              <img className="avatar-img" src={Avatar} alt="Avatar" />
            </div>
          </div>
        </Grid>
        <div className="carousel">
          <Carousel />
        </div>
      </React.Fragment>
    );
  }
}
