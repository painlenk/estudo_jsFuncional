const nums = [1, 2, 3, 4, 5];
const dobro = (n) => n * 2;
const total = nums.map(dobro);
console.log(total);

//com strings
const nomes = ["ana", "julia", "rafa", "dani"];
const primeiraLetra = (nome) => nome[0];
const letras = nomes.map(primeiraLetra);
console.log(letras);
