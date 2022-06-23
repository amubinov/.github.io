let userName = {
	Name: "Alex",
	year: 36,
	isMan: true ,
  b: undefined,
  c: null}
console.log (userName)


let arr = [];
let auto = ["audi" , "mersedes" , "volkswagen" , "porshe" , "skoda"]
console.log(auto.length);

auto.unshift("seat");{ //добавление в начало массива
console.log(auto);
}

auto.push("citroen");{ //добавление в конец массива
console.log(auto);
}

auto.shift();{
console.log(auto); //удаление из начала массива
}

auto.pop();{  //удаление из конца массива
console.log(auto);
} 

for(auto of auto) {
    console.log(auto); //перебор массива
}

let Name = "Alex";
let Age = "36";

function Hello(Name, Age) {
  
  return 'Привет ' + Name + ', ' + 'Твой возраст ' + Age;
}
let message = Hello(Name,Age);

console.log(message);