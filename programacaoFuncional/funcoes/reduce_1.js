const carrinho = [
  { nome: "caneta", qtd: 10, preco: 7.99 },
  { nome: "impressora", qtd: 0, preco: 649.5 },
  { nome: "caderno", qtd: 4, preco: 27.1 },
  { nome: "Lapis", qtd: 3, preco: 5.82 },
  { nome: "Tesoura", qtd: 1, preco: 19.2 },
];

const valorTotal = carrinho.map((item) => item.qtd * item.preco);
const totalCarrinho = valorTotal.reduce((acc, el) => {
  return acc + el;
}, 0);
console.log(valorTotal);
console.log(totalCarrinho);
