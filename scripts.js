const texto = " Bem-vindo ao site do canal<br>Dharzion";
const element = document.getElementById("typewriter-text");


let i = 0;


function escrever() {
    if (i < texto.length) {
        if (texto[i] === "<") {
          element.innerHTML += "<br>";
          i += 4;
        } else {
          element.innerHTML += texto[i];
          i++;
        }
        setTimeout(escrever, 90);
    }
}


window.addEventListener("load", escrever);


