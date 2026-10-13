const faixa = document.querySelector('.faixa');
const slides = document.querySelectorAll('.slide');
const anterior = document.querySelector('.botaoant');
const proximo = document.querySelector('.botaoprox');

let indice = 0;

function atualizarCarrosel() {
    faixa.style.transform = `translateX(-${indice * 100}%)`;
}

proximo.addEventListener('click', () => {
    indice = (indice + 1) % slides.length;
    atualizarCarrosel();
});

anterior.addEventListener('click', () => {
    indice = (indice - 1 + slides.length) % slides.length;
    atualizarCarrosel();
});
