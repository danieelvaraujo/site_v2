import React, { Component } from "react";
import Navegar from "../../Componentes/Header/Navegar";

import GlobalStyle from "../../Global";

class NavBar extends Component {
  state = {
    navbarOpen: false
  };

  manivelaNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  };

  render() {
    return (
      <>
        <Navegar
          navbarState={this.state.navbarOpen}
          manivelaNavbar={this.manivelaNavbar}
        />
        <GlobalStyle />
      </>
    );
  }
}

export default NavBar;
