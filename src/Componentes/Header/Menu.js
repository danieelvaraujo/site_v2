import React from "react";

import "./Menu.scss";

const Menu = props => {
  return (
    <div className="Abracadeira" onClick={props.manivelaNavbar}>
      <div className={props.navbarState ? "open" : ""}>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
      </div>
    </div>
  );
};

export default Menu;
