import React, { Component } from "react";
import "./resume.css";
import { Grid, Cell } from "react-mdl";
import Avatar from '../../img/avatar.png'
import Education from '../../components/education/education';

export default class resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div className="resume-left-col">
              <img src={Avatar} alt="Avatar" />
            </div>
            <h2>Joaquín Ferreira</h2>
            <h4>Programer</h4>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <hr/>
            <h5>Address</h5>
            <p>Candelaria, Santa cruz de Tenerife - Spain</p>
            <h5>Phone</h5>
            <p>(+34) 686 592 376</p>
            <h5>Email</h5>
            <p>joaquinferreirag@gmail.com</p>
            <h5>Web</h5>
            <p>joaquinferreira.com</p>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <Education />
          </Cell>
        </Grid>
      </div>
    );
  }
}
