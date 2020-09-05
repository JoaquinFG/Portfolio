import React, { Component } from "react";
import { Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from "react-mdl";
import './card.css';

export default class card extends Component {
  render() {
    return (
      <div className="mmargin">
        <Card className="card">
          <CardTitle className="card-title">Welcome</CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            sagittis pellentesque lacus eleifend lacinia...
          </CardText>
          <CardActions border>
            <Button colored>Get Started</Button>
            <Button colored>Get </Button>
            <Button colored>Started</Button>
          </CardActions>
          <CardMenu className="card-menu">
            <IconButton name="share" />
          </CardMenu>
        </Card>
      </div>
    );
  }
}
