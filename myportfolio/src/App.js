import React from "react";
import "./App.scss";
import { Layout, Header, Navigation, Drawer , Content } from "react-mdl";
import Main from "./components/main";
import { Link } from 'react-router-dom';
import SpLogo from "./img/spain.png";
import EnLogo from "./img/england.png";

function App() {
  return (
    <div className="header">
      <Layout>
        <Header transparent title="My Portfolio">
          <Navigation>
            <Link>
              <img className="img-lang" src={SpLogo} alt="Spain Flag" />
            </Link>
            <Link to="/">
              <img className="img-lang" src={EnLogo} alt="England Flag" />
            </Link>
            <Link to="/">Home</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/aboutme">About me</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Header>
        <Drawer title="My Portfolio">
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
