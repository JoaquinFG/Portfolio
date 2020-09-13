import React from "react";
import "./App.scss";
import { Layout, Navigation, Drawer , Content } from "react-mdl";
import Main from "./components/main";
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="header">
      <Layout>
        <Drawer title="Joaquín Ferreira">
          <Navigation>
            <Link to="/">Home</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/aboutme">About me</Link>
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
