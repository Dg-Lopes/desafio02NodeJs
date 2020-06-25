const nomeController = {
  criaNome:   (request, response) => {
    let aleatorio = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let name = " ";
    for (let i = 0; i < 10; i++) {
      name += aleatorio.charAt(Math.floor(Math.random() * aleatorio.length));
    }
    response.send("Nomes aleatórios: " + name)
  }
}

module.exports = nomeController; 