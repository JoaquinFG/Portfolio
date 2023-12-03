import React, { Component } from "react";
import "./education.scss";

export default class education extends Component {
  render() {
    return (
      <div className="education">
        <h2>Estudios</h2>
        <hr className="anim-hr2" />
        <div className="row">
          <div className="col-2 col-left">
            <h6>
              <i class="fa fa-graduation-cap" aria-hidden="true" />
            </h6>
          </div>
          <div className="col-10">
            <h5>
              Técnico Superior en Desarrollo de Aplicaciones Multiplataformas
              {/* Higher Technical Certificate in Multiplatform Applications
              Development */}
            </h5>
          </div>
        </div>
        <div className="row">
          <div className="col-2 col-left">
            <p>
              <i class="fa fa-graduation-cap" aria-hidden="true" />
            </p>
          </div>
          <div className="col-10 anim-education">
            <a href="https://platzi.com/@joaquinfg/curso/1339-fundamentos-javascript/diploma/detalle/">
              <p>Curso de Fundamentos de JavaScript en Platzi</p>
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-2 col-left">
            <p>
              <i class="fa fa-graduation-cap" aria-hidden="true" />
            </p>
          </div>
          <div className="col-10 anim-education">
            <a href="https://openwebinars.net/certificacion/9xddPM8x?type=pdf&r=5b8c8f41b}&t=">
              <p>Curso de JavaScript Profesional en OpenWebinars</p>
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-2 col-left">
            <p>
              <i class="fa fa-graduation-cap" aria-hidden="true" />
            </p>
          </div>
          <div className="col-10 anim-education">
            <a href="https://platzi.com/@joaquinfg/curso/1548-react/diploma/detalle/">
              <p>Curso de React.js en Platzi</p>
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-2 col-left">
            <p>
              <i class="fa fa-graduation-cap" aria-hidden="true" />
            </p>
          </div>
          <div className="col-10 anim-education">
            <a href="https://openwebinars.net/certificacion/exba5Yzv?type=pdf&r=5b8c8f41b}&t=">
              <p>Carrera PHP Developer en OpenWebinars</p>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
