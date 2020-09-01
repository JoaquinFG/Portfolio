import React, { Component } from "react";
import "../App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";

export default class header extends Component {
  render() {
    return (
      <div>
        <Layout className="bg-img">
          <Header transparent title="My Portfolio">
            <Navigation>
              <a href="/">Resume</a>
              <a href="/">About me</a>
              <a href="/">Projects</a>
              <a href="/">Contact</a>
            </Navigation>
          </Header>
          <Drawer title="My Portfolio">
            <Navigation>
              <a href="/">Resume</a>
              <a href="/">About me</a>
              <a href="/">Projects</a>
              <a href="/">Contact</a>
            </Navigation>
          </Drawer>
          <Content />
        </Layout>
      </div>
    );
  }
}
