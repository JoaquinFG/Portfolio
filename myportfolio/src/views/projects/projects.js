import React, { Component } from "react";
import { Tabs, Tab, Grid, Cell } from "react-mdl";
import Card from '../../components/card/card.js';
import './projects.css';

export default class projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          <Card />
          <Card />
          <Card />
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <h1>This is HTML/CSS</h1>
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

        <section className="projects-grid">
          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
        </section>
      </React.Fragment>
    );
  }
}
