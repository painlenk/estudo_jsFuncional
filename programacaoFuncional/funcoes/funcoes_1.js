function potencia(base) {
  return function (exp) {
    return Math.pow(base, exp);
  };
}
const potenciaDe2 = potencia(2); // esse cara recebe o retorno como funcao e espera receber um argumento
const resultadoPot = potencia(2)(8); // dessa maneira vc chama a função e ja chama o retorno da função passando o parametro

/*desafio: criar um função que recebe da seguinte maneira
    somar(3)(4)(5)
    calcular(3)(4)(fn)
*/

//resolução somar
const somar = function (a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
};

const totalSomar = somar(3)(4)(5);
console.log(totalSomar);

// resolução calcular
const calcular = (a) => {
  return (b) => {
    return (fn) => {
      if (typeof fn !== "function") return "nao é uma funcão";
      return fn(a, b);
    };
  };
};

const totalCalcular = calcular(3)(4)(function (a, b) {
  return a + b;
});
console.log(totalCalcular);

const calcA = calcular(3);
const calcB = calcA(4);
const calcFn = calcB(function (a, b) {
  return a + b;
});
console.log(calcFn);
