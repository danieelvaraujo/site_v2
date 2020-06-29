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
          <li>HTML5</li>
          <li>CSS3 / SASS</li>
          <li>Boostrap</li>
          <li>React.JS:</li>
          <li>React.Native</li>
          <li>Redux</li>
          <li>Axios</li>
          <li>Node.JS</li>
          <li>Express</li>
          <li>MongoDB</li>
        </ul>
      </div>

      <div className="Sab">
        <h2>Conhecimentos:</h2>
        <ul>
          <li>Javascript</li>
          <li>PHP</li>
          <li>Firebase</li>
          <li>mySQL</li>
          <li>Photoshop</li>
        </ul>
      </div>
    </div>
  );
}

export default PainelD;
