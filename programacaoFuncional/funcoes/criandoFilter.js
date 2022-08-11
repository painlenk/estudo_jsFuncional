const carrinho = [
  { nome: "caneta", qtd: 10, preco: 7.99 },
  { nome: "impressora", qtd: 0, preco: 649.9 },
  { nome: "caderno", qtd: 4, preco: 27.1 },
  { nome: "Lapis", qtd: 3, preco: 5.87 },
  { nome: "Tesoura", qtd: 1, preco: 19.2 },
];

Array.prototype.filter2 = function (fn) {
  let filtered = [];
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i], i, this)) {
      filtered.push(this[i]);
    }
  }
  return filtered;
};

const produtosValidos = (item) => item.qtd > 0;
console.log(carrinho.filter2(produtosValidos));
