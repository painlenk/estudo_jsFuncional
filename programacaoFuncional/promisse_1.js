const promisse = new Promise((resolve, reject) => {
  resolve(["ana,", "julia", "gabi"]);
});

promisse
  .then((arr) => arr[0])
  .then((item) => item[0])
  .then((letra) => letra.toUpperCase())
  .then((result) => console.log(result));
