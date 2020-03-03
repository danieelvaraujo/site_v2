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
          <ul>
            <li>Router</li>
            <li>MDL</li>
            <li>Spring</li>
          </ul>
          <li>Redux</li>
          <li>Node.JS</li>
          <li>Axios</li>
          <li>Firebase</li>
        </ul>
      </div>

      <div className="Sab">
        <h2>Conhecimentos:</h2>
        <ul>
          <li>PHP</li>
          <li>React.Native</li>
          <li>React.Hooks</li>
          <li>mySQL</li>
        </ul>
      </div>
    </div>
  );
}

export default PainelD;
