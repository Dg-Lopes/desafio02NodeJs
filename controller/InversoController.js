const inversoController = {
  criaInverso: (request, response) => {
    response.send("O seu nome ao contrário é: " + request.params.nome.split('').reverse().join(''));
  }
}

module.exports = inversoController