import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import './contact.css';
import Avatar from "../../img/avatar.png";

export default class contact extends Component {
    render() {
        return (
          <div className="contact-body">
            <Grid className="contact-grid">
              <Cell col={6}>
                <h2>Joaquín Ferreira</h2>
                <img className="avatar" src={Avatar} alt="Avatar" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </Cell>
              <Cell col={6}>
                <h2>Contact me</h2>
                <hr />
                <div className="contact-list">
                  <List>
                    <ListItem>
                      <ListItemContent className="listItemContent">
                        <i
                          className="fa fa-phone-square m-i"
                          aria-hidden="true"
                        ></i>
                        (+34) 686 592 376
                      </ListItemContent>
                    </ListItem>
                    <ListItem>
                      <ListItemContent className="listItemContent">
                        <i
                          className="fa fa-envelope m-i"
                          aria-hidden="true"
                        ></i>
                        joaquinferreirag@gmail.com
                      </ListItemContent>
                    </ListItem>
                    <ListItem>
                      <ListItemContent className="listItemContent">
                        <i className="fa fa-github m-i" aria-hidden="true"></i>
                        <a
                          href="https://github.com/JoaquinFG"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          JoaquinFG GitHub
                        </a>
                      </ListItemContent>
                    </ListItem>
                    <ListItem>
                      <ListItemContent className="listItemContent">
                        <i
                          className="fa fa-internet-explorer m-i"
                          aria-hidden="true"
                        ></i>
                        <a href="/">www.joaquinferreira.com</a>
                      </ListItemContent>
                    </ListItem>
                  </List>
                </div>
              </Cell>
            </Grid>
          </div>
        );
    }
}
