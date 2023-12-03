import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Layout, Header, Navigation } from "react-mdl";
/* import SpLogo from "../../img/spain.png";
import EnLogo from "../../img/england.png"; */
import "./nav.scss";

export default class nav extends Component {
  render() {
    return (
      <div className="marginb">
        <Layout>
          <Header transparent title="Joaquín Ferreira">
            <Navigation className="navBar">
              {/* <Link>
                <img className="img-lang" src={SpLogo} alt="Spain Flag" />
              </Link>
              <Link to="/">
                <img className="img-lang" src={EnLogo} alt="England Flag" />
              </Link> */}
              <Link className="undline right-mov" to="/">
                Inicio
              </Link>
              <Link className="undline right-mov" to="/aboutme">
                Sobre mi
              </Link>
              <Link className="undline right-mov" to="/resume">
                Currículum
              </Link>
              <Link className="undline right-mov" to="/projects">
                Proyectos
              </Link>
              <Link className="undline right-mov" to="/contact">
                Contacto
              </Link>
            </Navigation>
          </Header>
        </Layout>
      </div>
    );
  }
}
