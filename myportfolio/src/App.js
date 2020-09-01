import React from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer , Content } from "react-mdl";
import Main from "./components/main";
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <Layout className="bg-img">
        <Header transparent title="My Portfolio">
          <Navigation>
            <Link to="/resume">Resume</Link>
            <Link to="/aboutme">About me</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Header>
        <Drawer title="My Portfolio">
          <Navigation>
            <Link to="/resume">Resume</Link>
            <Link to="/aboutme">About me</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Drawer>
        <Content>
          <Main />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
