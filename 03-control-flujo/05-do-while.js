
let i = 2;

// lo primero que se ejecuta es la condicion
while (i < 2) {
  if(i % 2 == 0){
    console.log('numero par: ', i);
  }
  //console.log(i);
  i++;
}

console.log('Fuera del while');

// DoWhile => la condicion se ejecuta al final
do {
  if(i % 2 == 0){
    console.log('numero par: ', i);
  }
  //console.log(i);
  i++;
} while (i < 2);

console.log('Fuera del do while');