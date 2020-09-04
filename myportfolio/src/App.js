import React from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer , Content } from "react-mdl";
import Main from "./components/main";
import { Link } from 'react-router-dom';
import Logo from "./img/spain.png";

function App() {
  return (
    <React.Fragment>
      <Layout>
        <Header transparent title="My Portfolio">
          <Navigation className="navi-position">
            <Link>
              <img className="img-lang" src={Logo} alt="Logo" />
            </Link>
            <Link to="/">Home</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/aboutme">About me</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Header>
        <Drawer title="My Portfolio">
          <Navigation>
            <Link to="/">Home</Link>
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
    </React.Fragment>
  );
}

export default App;
