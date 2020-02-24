import React from "react";

import Heroi from "../../Componentes/Heroi/Heroi";
import Sobre from "./Sobre/Sobre";

import "./Inicio.scss";

function HomePage(props) {
  return (
    <div>
      <div className="BgHeroi">
        <Heroi titulo="Daniel Valente" tituloPisca="Desenvolvedor front-end" />
      </div>
      <Sobre />
    </div>
  );
}

export default HomePage;
