import React from "react";

import avatar from "../../../../Espolios/avatar.jpg";
import "./Paineis.scss";

function PainelE(props) {
  return (
    <div className="LdEsqrd">
      {/*Painel da Esquerda*/}
      <div className="DvEsqrd">
        <img src="https://i.picsum.photos/id/62/200/300.jpg" alt="avatar" />
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
          href="https://www.linkedin.com/in/daniel-valente-0221471a0/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i
            style={{ fontSize: "2em" }}
            className="fa fa-linkedin "
            aria-hidden="true"
          />
        </a>
        <a
          href="https://github.com/danieelvaraujo"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i
            style={{ fontSize: "2em", color: "black" }}
            className="fa fa-github-square"
            aria-hidden="true"
          />
        </a>
      </div>
    </div>
  );
}

export default PainelE;
