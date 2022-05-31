const text = document.getElementById('textbox') ; //получить элемент по id
console.log(text) ;

const myList = document.querySelectorAll('li') ; //Получить все элементы списка
console.log(myList) ;

const first = document.querySelector('li') ; //Получить первый элемент списка
console.log(first) ;

const child = document.getElementById('textbox') ;
const parent = child.closest('ul') ;//Получить родителя первого элемента списка
console.log(parent) ;

const nodes = Array.from(document.querySelectorAll('p')); //добавить текст

nodes.forEach(function(el) {   //Добавить во все элементы списка произвольный текст
    const currentText = el.innerText;
    el.innerText = 'Привет! ' + currentText ;
    console.log(currentText);
});

const  box = document.body ;
const pos = document.createElement('span') ;//Создать пустой html-узел для абзаца
pos.innerText = 'Привет! Это добавленный текст!' ; //добавить в него любой текст
box.append(pos) ;//Добавить созданный абзац последним элементом в body

pos.classList.add('new-class', 'new-class2') ;// Добавить два любых класса
console.log(pos.classList) ;

pos.classList.remove('new-class2') ; //Удалить класс
console.log(pos.classList) ;

pos.style.color = 'gold' ;

const bcolor = document.querySelector('ul') ; //изменить цвет текста для всех элементов списка
bcolor.style.color = 'red';
bcolor.style.backgroundColor = 'blue';


