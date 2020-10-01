import React, { Component } from "react";
import Nav from "../../components/Nav/nav";
import Avatar from "../../img/avatar.png";
import "./about.scss";

export default class aboutme extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <div className="container anim-container">
          <h2>SOBRE MI</h2>
          <hr className="anim-hr2" />
          <div className="row aboutMe">
            <div className="text-center col-lg-4 col-sm-12">
              <img className="avatar" src={Avatar} alt="Avatar" />
            </div>
            <div className="col-lg-8 col-sm-12">
              <h3>Programador y Desarrollador</h3>
              <hr className="anim-hr2" />
              <p className="font-italic">
                {/* I consider myself an efficient, effective person and I adapt
                quickly to any work environment.  */}
                Me considero una persona eficiente, eficaz y me adapto rápido a
                cualquier entorno de trabajo
              </p>
              <div className="row">
                <div className="col-lg-6 col-sm-12">
                  <ul>
                    <li>
                      <span>Email </span>
                      <i class="fa fa-arrow-right" aria-hidden="true"></i>{" "}
                      joaquindev@joaquinferreira.com
                    </li>

                    <li>
                      <span>Teléfono </span>
                      <i class="fa fa-arrow-right" aria-hidden="true"></i> (+34)
                      686 592 376
                    </li>
                    <li>
                      <span>Web </span>
                      <i class="fa fa-arrow-right" aria-hidden="true"></i>{" "}
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="aboutLinks anim-link"
                        href="https://www.joaquinferreira.com"
                      >
                        www.joaquinferreira.com
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-12">
                  <ul>
                    <li>
                      <span>Edad </span>
                      <i class="fa fa-arrow-right" aria-hidden="true"></i> 33
                      años
                    </li>
                    <li>
                      <span>Domicilio </span>
                      <i class="fa fa-arrow-right" aria-hidden="true"></i> Santa
                      Cruz, Tenerife, Spain
                    </li>
                    <li>
                      <span>Linkedin </span>
                      <i class="fa fa-arrow-right" aria-hidden="true"></i>{" "}
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="aboutLinks anim-link"
                        href="https://www.linkedin.com/in/joaquinferreirag/"
                      >
                        Joaquin Ferreira
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="font-italic">
                Como recién graduado, me encantaría poder entrar a formar parte
                de una empresa en la que poder aplicar todos mis conocimientos
                y, al mismo tiempo, que me permita desarrollarme
                profesionalmente.
              </p>
              {/* <p>
                 As a recent graduate, I would love to become
                part of a company where I can apply all my knowledge and, at the
                same time, allow me to develop professionally. I am an organized
                person with a great motivation, I am able to always give my best
                in any project.
              </p> */}
            </div>
          </div>
          <h4>HABILIDADES</h4>
          <hr className="anim-hr2" />
          <div className="skills row">
            <div className="col-lg-6 col-sm-12">
              HTML
              <div class="progress">
                <div class="progress-bar anim-progress-html"></div>
              </div>
              CSS
              <div class="progress">
                <div class="progress-bar anim-progress-css"></div>
              </div>
              JAVASCRIPT
              <div class="progress">
                <div class="progress-bar anim-progress-js"></div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              REACT
              <div class="progress">
                <div class="progress-bar anim-progress-react"></div>
              </div>
              NODE.JS
              <div class="progress">
                <div class="progress-bar anim-progress-node"></div>
              </div>
              BOOTSTRAP
              <div class="progress">
                <div class="progress-bar anim-progress-bootstrap"></div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
