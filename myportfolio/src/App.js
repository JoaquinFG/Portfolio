import React from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer , Content } from "react-mdl";
import Main from "./components/main";
import { Link } from 'react-router-dom';
import Logo from "./img/spain.png";

function App() {
  return (
    <div>
      <Layout>
        <Header
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          title="My Portfolio"
        >
          <Navigation className="navi-position">
            <Link>
              <img className="img-lang" src={Logo} alt="Logo" />
            </Link>
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
