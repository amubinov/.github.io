window.addEventListener('load', function() {})

const box = document.querySelector('p'); //click блок анимировано 
box.addEventListener('click',boxClickHandler); //увеличивал свои 

function boxClickHandler() { //размеры и менял цвет и положение.
    box.classList.add('Effect')
}
     
const form = document.querySelector('form');
form.addEventListener('submit', formSubmitHandler);
function formaSubmitHandler(e) {
    e.preventDefault();
    console.log('Отправка формы')
}




