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
            <Link to="/">Inicio</Link>
            <Link to="/aboutme">Sobre mi</Link>
            <Link to="/resume">Currículum</Link>
            <Link to="/projects">Proyectos</Link>
            <Link to="/contact">Contacto</Link>
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
