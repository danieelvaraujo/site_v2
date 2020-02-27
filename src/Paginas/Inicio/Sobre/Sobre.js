import React from "react";

import PainelE from "./Paineis/PainelE";
import PainelD from "./Paineis/PainelD";

import "./Sobre.scss";

function Sobre(props) {
  return (
    <div className="ContainerSobre">
      <h3 className="Sobre">Sobre mim:</h3>
      <div className="PainelE">
        <PainelE />
      </div>
      <div className="PainelD">
        <PainelD />
      </div>
    </div>
  );
}

export default Sobre;
