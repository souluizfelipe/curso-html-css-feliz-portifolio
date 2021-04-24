const btnRight = document.querySelector('.button-arrow.-right');
const btnLeft = document.querySelector('.button-arrow.-left');
const elements = document.querySelector('.elements');


let pos = 100;

btnRight.addEventListener('click', function() {
    pos = pos + 100;
    elements.style = `transform: translateX(${pos}px)`;
});

btnLeft.addEventListener('click', function() {
    pos = pos - 100;
    elements.style = `transform: translateX(${pos}px)`;
});