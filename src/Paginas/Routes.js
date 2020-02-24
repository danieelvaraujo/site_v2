import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import HomePage from "./Inicio/Inicio";
import Projetos from "./Projetos/Projetos";
import Contato from "./Contato/Contato";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={HomePage} />
      <Route path="/projetos" exact component={Projetos} />
      <Route path="/contato" exact component={Contato} />
    </BrowserRouter>
  );
}

export default Routes;
