import React, { Component } from "react";

import Cartao from "../../Componentes/Carrosel/Cartao";
import data from "../../data/data";

import "./Carrosel.scss";

class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      informacoes: data.informacoes,
      informacao: data.informacoes[0]
    };
  }

  antSlide = () => {
    const novoIndex = this.state.informacao.index - 1;
    this.setState({
      informacao: data.informacoes[novoIndex]
    });
  };

  proxSlide = () => {
    const novoIndex = this.state.informacao.index + 1;
    this.setState({
      informacao: data.informacoes[novoIndex]
    });
  };

  render() {
    const { informacoes, informacao } = this.state;
    return (
      <div className="Slider">
        <div className="Coluna">
          <div className={`SlideCartao SlideAtivo-${informacao.index}`}>
            <button
              className="Seta Seta-esquerda"
              onClick={() => this.antSlide()}
              disabled={informacao.index === 0}
            >
              <span>&#9664;</span>
            </button>
            <div className="AbracoSlider">
              {informacoes.map(informacao => (
                <Cartao
                  className="Cartao"
                  key={informacao._id}
                  informacao={informacao}
                />
              ))}
            </div>
            <button
              className="Seta Seta-direita"
              onClick={() => this.proxSlide()}
              disabled={informacao.index === data.informacoes.length - 1}
            >
              <span>&#9654;</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;
