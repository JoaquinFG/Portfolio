import React, { Component } from "react";
import "./resume.scss";
import Avatar from "../../img/avatar.png";
import Education from "../../components/education/education";
import Nav from '../../components/Nav/nav';

export default class resume extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav/>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-12">
              <div className="resume-left-col">
                <img src={Avatar} alt="Avatar" />
              </div>
              <h2>Joaquín Ferreira</h2>
              <h4>Developer</h4>
              <hr />
              <p>
                The development of my aptitudes and abilities through the
                incorporation of new knowledge in this sector have made me able
                to achieve the title of Technician in Multiplatform Applications
                Development, in addition to preparing my mind to absorb new
                technologies in a very effective way, thus achieving numerous
                certificates from different online platforms such as Platzi and
                OpenWebinars.
              </p>
              {/* <p>
              El desarrollo de mis aptitudes y habilidades mediante la
              incorporación de nuevos conocimientos en este sector me han hecho
              capaz de alcanzar el título de Técnico en Desarrollo de
              Aplicaciones Multiplataformas, además de preparar mi mente para
              absorver nuevas tecnologías de una manera muy eficaz, logrando así
              numerosos certificados de diferentes plataformas online como son
              Platzi y OpenWebinars.
            </p> */}
            </div>
            <div className="col-1"></div>
            <div className="col-lg-7 col-sm-12 resume-right-col">
              <Education />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
