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
          <h2>ABOUT ME</h2>
          <hr className="anim-hr2" />
          <div className="row aboutMe">
            <div className="text-center col-lg-4 col-sm-12">
              <img className="avatar" src={Avatar} alt="Avatar" />
            </div>
            <div className="col-lg-8 col-sm-12">
              <h3>Multiplatform App Developer</h3>
              <hr className="anim-hr2" />
              <p className="font-italic">
                I consider myself an efficient, effective person and I adapt
                quickly to any work environment.
              </p>
              {/* <p>
                Me considero una persona eficiente, eficaz y me adapto rápido a
                cualquier entorno de trabajo
              </p> */}
              <div className="row">
                <div className="col-6">
                  <ul>
                    <li>
                      <span>Birthday </span>
                      <i class="fa fa-arrow-right" aria-hidden="true"></i> 18
                      September 1987
                    </li>
                    <li>
                      <span>Website </span>
                      <i class="fa fa-arrow-right" aria-hidden="true"></i>{" "}
                      www.joaquinferreira.com
                    </li>
                    <li>
                      <span>Phone </span>
                      <i class="fa fa-arrow-right" aria-hidden="true"></i> (+34)
                      686 592 376
                    </li>
                  </ul>
                </div>
                <div className="col-6">
                  <ul>
                    <li>
                      <span>Linkedin </span>
                      <i class="fa fa-arrow-right" aria-hidden="true"></i> 33
                    </li>
                    <li>
                      <span>Email </span>
                      <i class="fa fa-arrow-right" aria-hidden="true"></i>{" "}
                      joaquinferreirag@gmail.com
                    </li>
                    <li>
                      <span>City </span>
                      <i class="fa fa-arrow-right" aria-hidden="true"></i> Santa
                      Cruz, Tenerife, Spain
                    </li>
                  </ul>
                </div>
              </div>
              <p className="font-italic">
                As a recent graduate, I would love to become part of a company
                where I can apply all my knowledge and, at the same time, allow
                me to develop professionally. I am an organized person with a
                great motivation, I am able to always give my best in any
                project.
              </p>
              {/* <p>
                Como recién graduado, me encantaría poder entrar a formar parte
                de una empresa en la que poder aplicar todos mis conocimientos
                y, al mismo tiempo, que me permita desarrollarme
                profesionalmente.
              </p> */}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
