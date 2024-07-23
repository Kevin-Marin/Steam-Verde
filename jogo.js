const prompt = require("prompt-sync")();
const jogos = [];

let jogo;
const criar = () => {
  let nome;
  while (true) {
    jogo.nome = prompt("Qual é o nome do jogo? ");

    if (jogo.nome == "") {
      console.log("O nome não pode ser vazio");
    } else {
      break;
    }
  }
};
let ano;
while (true) {
  jogo.ano = Number(prompt("Qual é o ano do jogo? "));

  if (jogo.ano <= 1958 || jogo.ano >= 2024 || isNaN(jogo.ano)) {
    console.log("Ano inválido");
  } else {
    break;
  }
}
 