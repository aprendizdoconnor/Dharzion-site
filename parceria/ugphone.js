const texto = [
  "Participe do Nosso Sorteio Reagindo ao Nosso Parceiro!",
  "● Código De Convite : dhar01",
  `● link de convite: <a href="https://encurtador.com.br/4RdNz" target="_blank" style="color: #00f; text-decoration: underline;">https://encurtador.com.br/4RdNz</a>`,
  "",
  "Benefícios por acessar o link de convite:",
  "1. 4 horas de teste gratuito para novos usuários",
  "2. Obter 488 diamantes adicionais + 250 diamantes para novatos = 738 diamantes no total",
  "💎Diamantes💎 podem ser usados como desconto ou trocados por tempo de uso"
];

const element = document.getElementById("typewriter-text");
let linha = 0;
let char = 0;

function escreverLinha() {
  if (linha < texto.length) {
    const linhaAtual = texto[linha];
    if (char < linhaAtual.length) {
      
      if (linhaAtual.substring(char).startsWith("<a")) {
        const fimTag = linhaAtual.indexOf("</a>") + 4;
        element.innerHTML += linhaAtual.substring(char, fimTag) + "<br>";
        char = linhaAtual.length;
      } else {
        element.innerHTML += linhaAtual[char];
        char++;
      }
      setTimeout(escreverLinha, 40);
    } else {
      element.innerHTML += "<br>";
      linha++;
      char = 0;
      setTimeout(escreverLinha, 300);
    }
  }
}

window.addEventListener("load", escreverLinha);