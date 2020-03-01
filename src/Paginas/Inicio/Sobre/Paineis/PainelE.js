import React from "react";

import avatar from "../../../../Espolios/avatar-resize.jpeg";
import "./Paineis.scss";

function PainelE(props) {
  return (
    <div className="LdEsqrd">
      {/*Painel da Esquerda*/}
      <div className="DvEsqrd">
        <img src={avatar} alt="avatar" />
      </div>
      <h3>Daniel Valente Araújo</h3>

      <hr />
      <div className="TelMail">
        {" "}
        {/*Telefone e email */}
        <i
          style={{ fontSize: "2em", color: "green" }}
          className="fa fa-whatsapp"
          aria-hidden="true"
        ></i>
        <p>(84) 98741-8355</p>
        <br />
        <i
          style={{ fontSize: "2em", color: "white" }}
          className="fa fa-envelope"
          aria-hidden="true"
        ></i>
        <p>danieelvaraujo@hotmail.com</p>
      </div>

      <hr />

      <div className="Sociais">
        {/*Redes sociais*/}
        <a
          href="https://github.com/danieelvaraujo"
          target="_blank"
          className="Github"
          rel="noopener noreferrer"
        >
          <button>
            <i className="fa fa-github-square" />
          </button>
        </a>
        <a
          href="https://www.linkedin.com/in/daniel-valente-0221471a0/"
          target="_blank"
          className="Linkedin"
          rel="noopener noreferrer"
        >
          <button>
            <i className="fa fa-linkedin" />
          </button>
        </a>
      </div>
    </div>
  );
}

export default PainelE;
