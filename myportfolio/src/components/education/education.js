import React, { Component } from "react";
import "./education.scss";

export default class education extends Component {
  render() {
    return (
      <div className="education">
        <h2>Education</h2>
        <hr className="anim-hr2" />
        <div className="row">
          <div className="col-2 col-left">
            <h6>
              <i class="fa fa-graduation-cap" aria-hidden="true" />
            </h6>
          </div>
          <div className="col-10">
            <h5>
              Higher Technical Certificate in Multiplatform Applications
              Development
            </h5>
          </div>
        </div>
        <div className="row">
          <div className="col-2 col-left">
            <p>
              <i class="fa fa-graduation-cap" aria-hidden="true" />
            </p>
          </div>
          <div className="col-10">
            <p>JavaScript Fundamentals Course on Platzi</p>
          </div>
        </div>
        <div className="row">
          <div className="col-2 col-left">
            <p>
              <i class="fa fa-graduation-cap" aria-hidden="true" />
            </p>
          </div>
          <div className="col-10">
            <p>JavaScript Professional Course on OpenWebinars</p>
          </div>
        </div>
        <div className="row">
          <div className="col-2 col-left">
            <p>
              <i class="fa fa-graduation-cap" aria-hidden="true" />
            </p>
          </div>
          <div className="col-10">
            <p>React.js Course on Platzi</p>
          </div>
        </div>
      </div>
    );
  }
}
