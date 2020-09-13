import React, { Component } from "react";
import { Tabs, Tab } from "react-mdl";
import Card from "../../components/card/card.js";
import Carousel from "../../components/carousel/carousel.js";
import "./projects.scss";

export default class projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Card />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Card />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Card />
          </div>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Card />
          </div>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h1>This is NodeJS</h1>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div>
          <h1>This is MySQL</h1>
        </div>
      );
    }
  }

  render() {
    return (
      <React.Fragment>
        <Tabs
          activeTab={this.setState.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
          className="tabs"
        >
          <Tab>React</Tab>
          <Tab>HTML/CSS</Tab>
          <Tab>NodeJS</Tab>
          <Tab>MySQL</Tab>
        </Tabs>

        <div className="project-size">{this.toggleCategories()}</div>
        <div className="carousel">
          <Carousel />
        </div>
      </React.Fragment>
    );
  }
}
