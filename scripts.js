const botaoInicio = document.getElementById("paraoInicio");

function toggleBotao() {
    if (window.scrollY > 300) {
        botaoInicio.style.display = "block";
     } else {
        botaoInicio.style.display = "none";
    }
}

window.addEventListener('load', toggleBotao);

window.addEventListener("scroll", toggleBotao);

botaoInicio.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

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


