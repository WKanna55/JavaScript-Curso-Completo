// cuales son los numeros pares
// estructura:
//while( condicion ){
//  bloque de codigo
//}

// puede haber bucles infinitos, por ello tenemos que poner una condicion limite
let i = 0;

while (i < 10) {
  if(i % 2 == 0){
    console.log('numero par: ', i);
  }
  //console.log(i);
  i++;
}

console.log('Fuera del while');
