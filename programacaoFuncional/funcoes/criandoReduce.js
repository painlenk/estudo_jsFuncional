const numeros = [1, 2, 3, 4, 5];

Array.prototype.reduce2 = function (fn, initialvalue) {
  let acc = initialvalue;

  for (let i = 0; i < this.length; i++) {
    if (!acc && i === 0) {
      acc = this[i];
      continue;
    }
    acc = fn(acc, this[i], i, this);
  }

  return acc;
};
const somar = (acc, el) => acc + el;
console.log(numeros.reduce2(somar));
