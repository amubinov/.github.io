let a=42
console.log(typeof a) //number

let b=true
console.log(typeof b); //boolean 

let c ='строка'
console.log(typeof c); //string

d=undefined
console.log(typeof d) //undefined




let g=1    //циклы
while (g < 10) {
    g++ ;
    console.log(g);
  
} 

let e=2
do {console.log(e);
    e++;
}while (e<10)

for (var f = 0; f < 9; f++) {
    console.log(f); }

    let UserAge= 20; //switch

    switch(UserAge) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
      console.log('Привет ребенок!')
        break;
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
          console.log('Привет подросток!')
        break;
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
        case 21:
          console.log('Привет Юноша!')
        break;
    }
   