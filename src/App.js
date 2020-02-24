import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import NavBar from "./Containers/NavBar/NavBar";
import Footer from "./Componentes/Footer/Footer";
import Inicio from "./Paginas/Inicio/Inicio";
import Projetos from "./Paginas/Projetos/Projetos";
import Contato from "./Paginas/Contato/Contato";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="AppContainer">
          <NavBar />

          <Route path="/" exact render={() => <Inicio />} />

          <Route path="/projetos" render={() => <Projetos />} />

          <Route path="/contato" render={() => <Contato />} />

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
