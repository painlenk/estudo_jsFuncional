const carrinho = [
  { nome: "caneta", qtd: 10, preco: 7.99 },
  { nome: "impressora", qtd: 0, preco: 649.9 },
  { nome: "caderno", qtd: 4, preco: 27.1 },
  { nome: "Lapis", qtd: 3, preco: 5.87 },
  { nome: "Tesoura", qtd: 1, preco: 19.2 },
];

const itensValidos = (item) => item.qtd > 0;
const itensNomes = (item) => item.nome;
console.log(carrinho.filter(itensValidos));
console.log(carrinho.filter(itensValidos).map(itensNomes));
