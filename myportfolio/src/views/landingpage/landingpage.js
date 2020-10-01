import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import "./landingpage.scss";
import { Link } from "react-router-dom";

export default class landingpage extends Component {
  render() {
    return (
      <React.Fragment>
        <Grid className="landing-grid">
          <Cell col={5}></Cell>
          <Cell col={7}>
            <div className="banner-text">
              <h1 className="anim-name">Joaquín Ferreira</h1>
              <h2>
                Programador y Desarrollador de
                <br />
                Aplicaciones Multiplataformas
              </h2>
              <hr className="anim-hr" />
              <div className="mt-4 navBarLand anim-navBar">
                <Link className="undlineLand right-movLand" to="/">
                  Inicio
                </Link>
                <Link className="undlineLand right-movLand" to="/aboutme">
                  Sobre mi
                </Link>
                <Link className="undlineLand right-movLand" to="/resume">
                  Currículum
                </Link>
                <Link className="undlineLand right-movLand" to="/projects">
                  Proyectos
                </Link>
                <Link className="undlineLand right-movLand" to="/contact">
                  Contacto
                </Link>
              </div>
              <br />
              <div className="social-link anim-socialLinks">
                <a
                  href="https://github.com/JoaquinFG"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-github" aria-hidden="true" />
                </a>
                <a
                  href="https://twitter.com/Joakin_FG"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-twitter" aria-hidden="true" />
                </a>
                <a
                  href="https://www.linkedin.com/in/joaquinferreirag/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                <a
                  href="https://t.me/Joaquin_fg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-telegram" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </React.Fragment>
    );
  }
}
