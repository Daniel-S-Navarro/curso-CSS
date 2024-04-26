let altura = 0;
let largura = 0;
let vidas = 1;
let tempo = 10;
let tempoCronometro = 1500;

let nivel = window.location.search;
nivel = nivel.replace("?", "");

if (nivel === "normal") {
  tempoCronometro = 1500;
} else if (nivel === "dificil") {
  tempoCronometro = 1000;
} else if (nivel === "chucknorris") {
  tempoCronometro = 700;
}

function ajustaTamanhoJogo() {
  altura = window.innerHeight;
  largura = window.innerWidth;
}

ajustaTamanhoJogo();

let cronometro = setInterval(function () {
  tempo -= 1;
  if (tempo <= 0) {
    window.location.href = "vitoria.html";
  } else {
    document.getElementById("cronom").innerHTML = tempo;
  }
}, 1000);

// Criando posição do mosquito de forma dinamica

function posicaoRandomica() {
  //Remover o mosquito anterior caso exista
  if (document.getElementById("mosquito")) {
    document.getElementById("mosquito").remove();
    if (vidas > 3) {
      window.location.href = "fim_de_jogo.html";
    }
    document.getElementById("v" + vidas).src = "imagens/coracao_vazio.png";
    vidas++;
  }

  let posicaoX = Math.floor(Math.random() * largura) - 90;
  let posicaoY = Math.floor(Math.random() * altura) - 90;

  posicaoX = posicaoX < 0 ? 0 : posicaoX;
  posicaoY = posicaoY < 0 ? 0 : posicaoY;

  console.log(posicaoX, posicaoY);

  let mosquito = document.createElement("img");
  mosquito.src = "imagens/mosquito.png";
  mosquito.className = tamanhoAleatorio();
  mosquito.style.left = posicaoX + "px";
  mosquito.style.top = posicaoY + "px";
  mosquito.style.position = "absolute";
  mosquito.id = "mosquito";
  mosquito.onclick = function () {
    this.remove();
  };

  document.body.appendChild(mosquito);
  console.log(tamanhoAleatorio());
}

// Criando função de tamanho aleatório da imagem do mosquito

function tamanhoAleatorio() {
  let classe = Math.floor(Math.random() * 6);
  switch (classe) {
    case 0:
      return "mosquito1";
    case 1:
      return "mosquito2";
    case 2:
      return "mosquito3";
    case 3:
      return "mosquito4";
    case 4:
      return "mosquito5";
    case 5:
      return "mosquito6";
  }
}
