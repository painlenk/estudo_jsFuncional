const carrinho = [
  { nome: "caneta", qtd: 10, preco: 7.99 },
  { nome: "impressora", qtd: 0, preco: 649.9 },
  { nome: "caderno", qtd: 4, preco: 27.1 },
  { nome: "Lapis", qtd: 3, preco: 5.87 },
  { nome: "Tesoura", qtd: 1, preco: 19.2 },
];

const carrinhoTotal = (item) => {
  totalPrice = item.preco * item.qtd;
  return { nome: item.nome, precoTotal: totalPrice };
};

const totalPreco = (item) => item.preco * item.qtd;
const nome = (item) => item.nome;

const carrinhoFinal = carrinho.map(nome);

console.log(carrinhoFinal);
