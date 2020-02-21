import React from "react";
import { useSpring, config } from "react-spring";

import Menu from "./Menu";
import MenuColapso from "./MenuColapsar";

import "./Navegar.scss";

const Navegar = props => {
  const barAnimation = useSpring({
    from: { transform: "translate3d(0, -10rem, 0)" },
    transform: "translate3d(0,0,0)"
  });

  const linkAnimation = useSpring({
    from: { transform: "translate3d(0, 30px, 0", opacity: 0 },
    to: { transform: "translate3d(0,0,0)", opacity: 1 },
    delay: 800,
    config: config.woobly
  });

  return (
    <>
      <div className="NavBar" style={barAnimation}>
        <div className="Container">
          <div className="NavLinks" style={linkAnimation}>
            <a href="/" exact>
              Inicio
            </a>
            <a href="/projetos">Projetos</a>
            <a href="/contato">Contato</a>
          </div>
          <div className="Wrapper">
            <Menu
              navbarState={props.navbarState}
              manivelaNavbar={props.manivelaNavbar}
            />
          </div>
        </div>
      </div>
      <MenuColapso
        navbarState={props.navbarState}
        manivelaNavbar={props.manivelaNavbar}
      />
    </>
  );
};

export default Navegar;
