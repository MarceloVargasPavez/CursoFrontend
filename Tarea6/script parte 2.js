let pokemon = ["Pikachu", "Charmander", "Bulbasaur", "Squirtle"];

function transformarMinusToMayus(lista_palabras) {
  let arreglo_con_mayusculas = [];
  for (var i = 0; i < lista_palabras.length; ++i) {
    arreglo_con_mayusculas.push(lista_palabras[i].toUpperCase());
  }
  return arreglo_con_mayusculas;
}

console.log(transformarMinusToMayus(pokemon));
