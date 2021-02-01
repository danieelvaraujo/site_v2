import React from "react";

import "./Paineis.scss";

function PainelD(props) {
  return (
    <div className="LdDrt">
      {/*Painel da Direita*/}
      <h2>Formação acadêmica:</h2>
      <p>Bacharelado em Engenharia Civil - (2013-2018) UniFacex </p>
      <hr />
      <div className="Exp">
        <h2>Experiência:</h2>
        <ul>
          <li>HTML/CSS</li>
          <li>React.JS</li>
          <li>React Native</li>
          <li>Vue JS</li>
          <li>Node JS</li>
          <li>Adonis JS</li>          
          <li>Laravel</li>
          <li>Redux</li>
          <li>Express</li>
          <li>MongoDB</li>
          <li>PostgreSQL</li>
        </ul>
      </div>

      <div className="Sab">
        <h2>Conhecimentos:</h2>
        <ul>
          <li>Javascript</li>
          <li>PHP</li>
          <li>SQL</li>
          <li>Docker</li>
          <li>Bot para Telegram/Whatsapp</li>
          <li>Inglês fluente</li>
          <li>Francês avançado</li>
        </ul>
      </div>
    </div>
  );
}

export default PainelD;
