const nums = [1, 2, 3, 4, 5];
const carrinho = [
  { nome: "caneta", qtd: 10, preco: 7.99 },
  { nome: "impressora", qtd: 0, preco: 649.9 },
  { nome: "caderno", qtd: 4, preco: 27.1 },
  { nome: "Lapis", qtd: 3, preco: 5.87 },
  { nome: "Tesoura", qtd: 1, preco: 19.2 },
];

const mapa = (array, fn) => {
  const mapped = [];
  for (i = 0; i < array.length; i++) {
    mapped.push(fn(array[i], i, array));
  }
  return mapped;
};

const dobro = (item) => {
  return item * 2;
};

const total = mapa(nums, dobro);
console.log(total);

//versão correta

Array.prototype.mapa2 = function (fn) {
  let mapped = [];
  for (let i = 0; i < this.length; i++) {
    mapped.push(fn(this[i], i, this));
  }
  return mapped;
};

const carrinhoTotal = (item) => {
  totalPrice = item.preco * item.qtd;
  return { nome: item.nome, precoTotal: totalPrice };
};

const triplo = (item) => item * 3;

console.log(carrinho.mapa2(carrinhoTotal));
