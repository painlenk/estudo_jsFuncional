const exec = (fn, a, b) => {
  return fn(a, b);
};

const somarTerminal = (x, y) => console.log(x + y);
const subtrairTerminal = (x, y) => console.log(x - y);
const subtrair = (w, z) => w - z;

exec(somarTerminal, 5, 5);
exec(subtrairTerminal, 5, 5);

const r = exec(subtrair, 60, 30);
console.log(r);
