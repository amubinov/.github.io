const text = document.getElementById('banner__item') ; //получить элемент по id
console.log(text) ;

const myList = document.querySelectorAll('li') ; //Получить все элементы списка
console.log(myList) ;

const first = document.querySelector('li') ; //Получить первый элемент списка
console.log(first) ;

const parent = text.closest('.banner') ;//Получить родителя первого элемента списка
console.log(parent) ;

const nodes = Array.from(document.querySelectorAll('p')); //добавить текст

nodes.forEach(function(el) {
    const currentText = el.innerText;
    el.innerText = 'Привет! ' + currentText ;
    console.log(currentText);
});


// node.innerHTML = '<p>Привет мир!</p>'; 
// //node.innerText = 'Привет';
// console.log(node); 

 

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


