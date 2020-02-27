import React from "react";

import { useSpring } from "react-spring";

import "./MenuColapsar.scss";

const CollapseMenu = props => {
  const { open } = useSpring({ open: props.navbarState ? 0 : 1 });

  if (props.navbarState === true) {
    return (
      <div
        className="Abraco"
        style={{
          transform: open
            .interpolate({
              range: [0, 0.2, 0.3, 1],
              output: [0, -20, 0, -200]
            })
            .interpolate(openValue => `translate3d(0, ${openValue}px, 0`)
        }}
      >
        <div className="NaveLinks">
          <li>
            <a href="/" exact onClick={props.manivelaNavbar}>
              Inicio
            </a>
          </li>
          <li>
            <a href="/projetos" onClick={props.manivelaNavbar}>
              Projetos
            </a>
          </li>
          <li>
            <a href="/contato" onClick={props.manivelaNavbar}>
              Contato
            </a>
          </li>
        </div>
      </div>
    );
  }
  return null;
};

export default CollapseMenu;
