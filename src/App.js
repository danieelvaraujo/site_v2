import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import NavBar from "./Containers/NavBar/NavBar";
import Footer from "./Componentes/Footer/Footer";
import Inicio from "./Paginas/Inicio/Inicio";
import Projetos from "./Paginas/Projetos/Projetos";
import config from "./Paginas/Contato/config";
import Contato from "./Paginas/Contato/Contato";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="AppContainer">
          <NavBar />

          <Inicio
            titulo="Daniel Valente"
            tituloPisca="Desenvolvedor front-end"
          />

          <Projetos />

          <Contato />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
