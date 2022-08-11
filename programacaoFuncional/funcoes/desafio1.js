const carrinho = [
  { nome: "caneta", qtd: 10, preco: 7.99, fragil: true },
  { nome: "impressora", qtd: 1, preco: 649.5, fragil: true },
  { nome: "caderno", qtd: 4, preco: 27.1, fragil: false },
  { nome: "Lapis", qtd: 3, preco: 5.82, fragil: false },
  { nome: "Tesoura", qtd: 1, preco: 19.2, fragil: true },
];

//1 fragil: true
//2 total por item
//3media total

const isFragil = (item) => item.fragil === true;
const totalItem = (item) => item.qtd * item.preco;
const sumTotal = (acc, el) => {
  let novaQtd = acc.qtd + 1;
  let novoTotal = acc.total + el;
  return { qtd: novaQtd, total: novoTotal, media: novoTotal / novaQtd };
};

const total = carrinho.filter(isFragil).map(totalItem).reduce(sumTotal, {
  qtd: 0,
  total: 0,
  media: 0,
}).media;

console.log(total);
