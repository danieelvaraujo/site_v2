import React from "react";

import Heroi from "../../Componentes/Heroi/Heroi";
import Sobre from "./Sobre/Sobre";

import "./Inicio.scss";

function HomePage(props) {
  return (
    <div>
      <div className="BgHeroi">
        <Heroi titulo={props.titulo} tituloPisca={props.tituloPisca} />
      </div>
      <Sobre />
    </div>
  );
}

export default HomePage;
