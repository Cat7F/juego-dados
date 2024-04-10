const interruptor = document.querySelector(".interruptor");
const dadouno = document.querySelector(".dado1");
const dadodos = document.querySelector(".dado2");
const dadotres = document.querySelector(".dado3");
const dadocuatro = document.querySelector(".dado4");
const dadocinco = document.querySelector(".dado5");
const dadoseis = document.querySelector(".dado6");


interruptor.addEventListener("click", () => {
    interruptor.classList.toggle("encendido");
    dadouno.classList.toggle("rotando");
    dadodos.classList.toggle("rotando");
    dadotres.classList.toggle("rotando");
    dadocuatro.classList.toggle("rotando");
    dadocinco.classList.toggle("rotando");
    dadoseis.classList.toggle("rotando");
});