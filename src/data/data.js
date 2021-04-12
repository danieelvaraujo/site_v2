import earthly from "../Espolios/earthly.jpg";
import coordenapp from "../Espolios/coordenapp.jpg";
import pokedex from "../Espolios/pokedex.jpg";
import doto from "../Espolios/doto.jpg";

const data = {
  informacoes: [
    {
      _id: "earthlyapi",
      index: 0,
      titulo: "Earthly API",
      subTitulo: "Pesquise sobre um país que deseja conhecer.",
      foto: earthly,
      alter: "A imagem não carregou corretamente",
      linkLive: "https://meta-desafio.herokuapp.com/",
      linkGit: "https://github.com/danieelvaraujo/meta-desafio",
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
    {
      _id: "dotapp",
      index: 3,
      titulo: "DotApp",
      subTitulo: "App de heróis do doto",
      foto: doto,
      alter: "A imagem não carregou corretamente",
      linkLive: "#",
      linkGit: "https://github.com/danieelvaraujo/dotapp",
    },
  ],
};

export default data;
