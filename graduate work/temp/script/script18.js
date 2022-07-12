window.addEventListener('load', function() {})

const box = document.querySelector('p'); //click блок анимировано 
box.addEventListener('click',boxClickHandler); //увеличивал свои 

function boxClickHandler() { //размеры и менял цвет и положение.
    box.classList.add('Effect')
}

box.addEventListener("click", function(event) {   
    console.log("Координаты:" + event.clientX +":" + event.clientY);
})

box.addEventListener('submit', handler);
console.log(this)


function handler(event) {
    event.preventDefault();

    console.log(event.target)
}



     
/*const form = document.querySelector('form');
form.addEventListener('submit', formSubmitHandler);
function formaSubmitHandler(e) {
    e.preventDefault();
    console.log('Отправка формы')
}*/




