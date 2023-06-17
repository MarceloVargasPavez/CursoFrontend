let pokemon = [
  {
    nombre: "Pikachu",
    tipo: "Electrico",
  },
  {
    nombre: "Charmander",
    tipo: "Fuego",
  },
  {
    nombre: "Bulbasaur",
    tipo: "Planta",
  },
  {
    nombre: "Squirtle",
    tipo: "Agua",
  },
  {
    nombre: "Charmeleon",
    tipo: "Fuego",
  },
  {
    nombre: "Weedle",
    tipo: "bicho",
  },
  {
    nombre: "Charizard",
    tipo: "Fuego",
  },
];

function obtenerPokemonTipoFuego(lista_pokemons) {
  let pokemon_tipo_fuego = [];
  for (var i = 0; i < lista_pokemons.length; ++i) {
    if (lista_pokemons[i].tipo == "Fuego") {
      pokemon_tipo_fuego.push(lista_pokemons[i]);
    }
  }
  return pokemon_tipo_fuego;
}

//Se llama a la funcion y se imprime por pantalla.
console.log(obtenerPokemonTipoFuego(pokemon));
