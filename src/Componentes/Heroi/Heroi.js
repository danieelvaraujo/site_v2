import React from "react";

import "./Heroi.scss";

function Heroi(props) {
  return (
    <div>
      <div className="BgHeroi"></div>
      <div className="Heroi">
        {props.titulo && <h1 className="Titulo">{props.titulo}</h1>}
        {props.tituloPisca && (
          <h2 className="TituloPisca">{props.tituloPisca}</h2>
        )}
        {props.subTitulo && <h3 className="Subtitulo">{props.subTitulo}</h3>}
      </div>
    </div>
  );
}

export default Heroi;
