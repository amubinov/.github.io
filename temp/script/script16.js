let object = new Object();
let name = 'Alex';
let age = 37 ;
let a = true ;
let b;
console.log(name , age , a , b);

let arr = [];
let auto = ["audi" , "mersedes" , "volkswagen" , "porshe" , "skoda"]
console.log(auto.length);

auto.unshift["seat"];{ //добавление в начало массива
console.log(auto);
}

auto.push["citroen"];{ //добавление в конец массива
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
let message = Hello((Name), (Age));

console.log(message);