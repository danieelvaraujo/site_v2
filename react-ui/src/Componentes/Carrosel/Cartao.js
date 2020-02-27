import React from "react";
import PropTypes from "prop-types";

import "./Cartao.scss";

const Cartao = ({ informacao }) => {
  const { index, titulo, subTitulo, alter, foto, linkGit } = informacao;
  return (
    <div id={`Carta${index}`} className="Cartao">
      <img src={foto} alt={alter} />
      <div className="Detalhes">
        <p className="Titulo">{titulo}</p>
        <p className="Subtitulo">{subTitulo}</p>
        <div className="Links">
          <a href={linkGit} className="LinkGit">
            <button>
              <p>Github</p>
              <i className="fa fa-github-square" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

Cartao.propTypes = {
  informacao: PropTypes.object.isRequired
};

export default Cartao;
