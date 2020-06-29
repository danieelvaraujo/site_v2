import tvadvg from "../Espolios/tvadvg.jpg";
import coordenapp from "../Espolios/coordenapp.jpg";
import pokedex from "../Espolios/pokedex.jpg";

const data = {
  informacoes: [
    {
      _id: "tvadvg",
      index: 0,
      titulo: "Teresinha Valente Advogada",
      subTitulo: "Advogada atuando em Natal e Macaíba/RN",
      foto: tvadvg,
      alter: "A imagem não carregou corretamente",
      linkLive: "https://teresinha-advogada.herokuapp.com/",
      linkGit: "https://github.com/danieelvaraujo/teresinha_advogada",
    },
    {
      _id: "coordenapp",
      index: 1,
      titulo: "Coordenapp",
      subTitulo:
        "App que salva a geolocalização da foto e as exibe automaticamente",
      foto: coordenapp,
      alter: "A imagem não carregou corretamente",
      linkLive:
        "https://expo.io/artifacts/aa468288-c78c-4f9f-bafa-ddd0dd86ebfc",
      linkGit: "https://github.com/danieelvaraujo/reactnative-desafio",
    },
    {
      _id: "pokedex",
      index: 2,
      titulo: "Poképedia",
      subTitulo: "App de informações sobre os Pokemons",
      foto: pokedex,
      alter: "A imagem não carregou corretamente",
      linkLive: "https://pokedexson.herokuapp.com/",
      linkGit: "https://github.com/danieelvaraujo/pokedexson",
    },
  ],
};

export default data;
