const numeroController = {
  criaNumero: (request, response) => {
    let aleatorio = Math.floor(Math.random() * 999999)
    if (aleatorio >= 100000) {
      response.send("Um número aleatório gerado foi: " + aleatorio)
    }
  }
}

module.exports = numeroController