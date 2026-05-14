<script src="main.js"></script>
const botoes = document.querySelectorAll(".botao");
console.log(botoes);
for (let i = 0; i < botoes.length; i++) {
  console.log(i);
}
botoes[i].onclick = function () {};
botoes[i].onclick = function () {
  botoes[i].classList.add("ativo");
};
for (let i = 0; i < botoes.length; i++) {
  botoes[i].onclick = function () {
    botoes[i].classList.add("ativo");
  };
}
for (let j = 0; j < botoes.length; j++) {
  botoes[j].classList.remove("ativo");
}
const botoes = document.querySelectorAll(".botao");

for (let i = 0; i < botoes.length; i++) {
  botoes[i].onclick = function () {
    for (let j = 0; j < botoes.length; j++) {
      botoes[j].classList.remove("ativo");
    }

    botoes[i].classList.add("ativo");
  };
}
const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");
botoes[i].classList.add("ativo");
textos[i].classList.add("ativo");
botoes[j].classList.remove("ativo");
textos[j].classList.remove("ativo");
for (let i = 0; i < botoes.length; i++) {
  botoes[i].onclick = function () {
    for (let j = 0; j < botoes.length; j++) {
      botoes[j].classList.remove("ativo");
      textos[j].classList.remove("ativo");
    }

    botoes[i].classList.add("ativo");
    textos[i].classList.add("ativo");
  };
}const contadores = document.querySelectorAll(".contador");
contadores[0].textContent = "Contagem regressiva";S
const tempoObjetivo1 = new Date("2024-10-05");

contadores[0].textContent = tempoObjetivo1;
const tempoObjetivo1 = new Date("2023-10-05T00:00:00");
let tempoAtual = new Date();
contadores[0].textContent = tempoObjetivo1 - tempoAtual;
const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2023-10-05T00:00:00");
let tempoAtual = new Date();

contadores[0].textContent = tempoObjetivo1 - tempoAtual;
contadores[0].textContent = calculaTempo(tempoObjetivo1);
function calculaTempo(tempoObjetivo) {
  let tempoAtual = new Date();
  let tempoFinal = tempoObjetivo - tempoAtual;
}
let segundos = Math.floor(tempoFinal / 1000);
let minutos = Math.floor(segundos / 60);
let horas = Math.floor(minutos / 60);
let dias = Math.floor(horas / 24);
return (
  dias +
  " dias " +
  horas +
  " horas " +
  minutos +
  " minutos " +
  segundos +
  " segundos"
);
function calculaTempo(tempoObjetivo) {
  let tempoAtual = new Date();
  let tempoFinal = tempoObjetivo - tempoAtual;
  let segundos = Math.floor(tempoFinal / 1000);
  let minutos = Math.floor(segundos / 60);
  let horas = Math.floor(minutos / 60);
  let dias = Math.floor(horas / 24);
  return (
    dias +
    " dias " +
    horas +
    " horas " +
    minutos +
    " minutos " +
    segundos +
    " segundos"
  );
}
segundos %= 60;
minutos %= 60;
horas %= 24;