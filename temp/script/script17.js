const text = document.getElementById('banner__item') ; //получить элемент по id
console.log(text) ;

const myList = document.querySelectorAll('li') ; //Получить все элементы списка
console.log(myList) ;

const first = document.querySelector('li') ; //Получить первый элемент списка
console.log(first) ;

const parent = text.closest('.banner') ;//Получить родителя первого элемента списка
console.log(parent) ;

const nodes = document.querySelectorAll('p'); //добавить текст

const nodeArr = [];

for (let index = 0; index < nodes.length; index++) {
    nodeArr.push(nodes[i]);    
}

const updateParagraph = (el) => {
    el => el.innerText = '$$$ ' + el.innerText;
};


nodeArr.forEach(updateParagraph); 

// 1. Получаем элменты + перводим в массив

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


