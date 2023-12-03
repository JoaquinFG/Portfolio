import React, { Component } from "react";
import "./projects.scss";
import Nav from "../../components/Nav/nav";
import Carousel from "../../components/carousel/carousel";
import syc from "../../img/syc1.png";
import quimpi from "../../img/quimpi.png";
import bangarang from "../../img/bangarang.png";

export default class projects extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <div className="container anim-container">
          <h2>PROJECTS</h2>
          <hr className="anim-hr2" />
          <div className="row cards">
            <div className="col-lg-4 col-sm-12">
              <a
                href="https://www.showyourcompany.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div class="card anim-card1">
                  <img class="card-img-top" src={syc} alt="SYC" />
                  <div class="card-body">
                    <h4 class="card-title">Show Your Company</h4>
                    <hr className="anim-hr3" />
                    <p class="card-text">
                      Diseño web de la empresa de Publicidad y Marketing digital para Taxis,
                      Autobuses o cualquier otro tipo de transporte público.
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-sm-12">
              <a
                href="https://www.quimpi.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div class="card anim-card2">
                  <img class="card-img-top" src={quimpi} alt="Quimpi" />
                  <div class="card-body">
                    <h4 class="card-title">Quimpi campamentos</h4>
                    <hr className="anim-hr3" />
                    <p class="card-text">
                      Diseño web de Quimpi, el primer campamento starlight del
                      mundo. Apto para todas las edades.
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-sm-12">
              <a
                href="https://bebangarang.es/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div class="card anim-card3">
                  <img class="card-img-top" src={bangarang} alt="Bangarang" />
                  <div class="card-body">
                    <h4 class="card-title">BeBangarang</h4>
                    <hr className="anim-hr3" />
                    <p class="card-text">
                      Diseño y desarrollo web utilizando diferentes tecnologías como HTML, CSS, JavaScript, React, NodeJS y uso de APIs.
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="carousel">
          <Carousel />
        </div>
      </React.Fragment>
    );
  }
}
