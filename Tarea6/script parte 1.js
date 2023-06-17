function fibonacci() {
  console.log("Numeros entre 0 y 1000 de la secuencia de fibonacci:");
  let numero1 = 0;
  console.log(numero1);
  let numero2 = 1;
  console.log(numero2);
  let resultado = 0;
  while (resultado <= 1000) {
    resultado = numero1 + numero2;
    if (resultado <= 1000) {
      console.log(resultado);
    }
    numero1 = numero2;
    numero2 = resultado;
  }
}

fibonacci();

function fibonacciPares() {
  console.log("Numeros pares entre 0 y 1000 de la secuencia de fibonacci:");
  let numero1 = 0;
  console.log(numero1);
  let numero2 = 1;
  let resultado = 0;
  while (resultado <= 1000) {
    resultado = numero1 + numero2;
    if (resultado <= 1000 && resultado % 2 == 0) {
      console.log(resultado);
    }
    numero1 = numero2;
    numero2 = resultado;
  }
}

fibonacciPares();

function fibonacciImpares() {
    console.log("Numeros impares entre 0 y 1000 de la secuencia de fibonacci:");
    let numero1 = 0;
    let numero2 = 1;
    console.log(numero1);
    let resultado = 0;
    while (resultado <= 1000) {
      resultado = numero1 + numero2;
      if (resultado <= 1000 && resultado % 2 != 0) {
        console.log(resultado);
      }
      numero1 = numero2;
      numero2 = resultado;
    }
  }
  
  fibonacciImpares();