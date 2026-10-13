const jogos = document.querySelector("#jogos");
const titulos = document.querySelector("#titulos");
const inicio = document.querySelector("#inicio");
const elenco = document.querySelector("#elenco");

jogos.addEventListener("click", function() {
    window.location.href = "jogos.html";
});

titulos.addEventListener("click", function() {
    window.location.href = "jogos.html";
});

inicio.addEventListener("click", function() {
    window.location.href = "jogos.html";
});

elenco.addEventListener("click", function() {
    window.location.href = "jogos.html";
});

document.addEventListener('DOMContentLoaded', function() {
    new Splide('.splide', {
        type:'loop',
        autoplay: true,
        interval: 3000,
        perPage: 1,
    }) .mount();
});