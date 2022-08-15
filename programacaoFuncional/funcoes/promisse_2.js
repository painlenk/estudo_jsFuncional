function esperarPor(tempo = 2000) {
  // espera um tempo e retorna uma promisse
  return new Promise(function (resolve) {
    // cria instancia da promisse e recebe o resolve
    return setTimeout(function () {
      // apos 2 segundos retorna o resolve
      console.log("Executando promisse");
      resolve("executado com sucesso"); // resolve a promisse
    }, tempo);
  });
}

esperarPor()
  .then((data) => console.log(data))
  .then(esperarPor(3000))
  .then((resolve) => console.log(`3s ${resolve}`))
  .then(esperarPor(4000))
  .then(console.log("deu certo"));
