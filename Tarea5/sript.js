let notas = [6, 8, 9, 2, 5, 10];

function sumarNotas(arregloNotas) {
  var total = 0;
  for (let i = 0; i < arregloNotas.length; ++i) {
    total = total + arregloNotas[i];
  }
  return total;
}

function calcularPromedioNotas(arregloNotas) {
  var sumaNotas = sumarNotas(arregloNotas);
  return sumaNotas / arregloNotas.length;
}

console.log(calcularPromedioNotas(notas));
