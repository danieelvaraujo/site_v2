import React from "react";

import Carrosel from "../../Containers/Carrosel/Carrosel";

import "./Projetos.scss";

function Projetos(props) {
  return (
    <div className="ContainerProjetos">
      <h3>Meus projetos:</h3>
      <Carrosel />
    </div>
  );
}

export default Projetos;
