// break: permite salirnos del loop
// continue permite saltarnos una iteracion
// se puede usar con todos los loops

// ejemplo con while
let i = 0;

while(i < 6){
  i++;
  if (i === 2){
    continue; // todo lo que se encuentra despues sera ignorado, 2 no se mostrara
  }
  if (i === 4){
    break; // se detiene la ejecucion del bucle
  }
  console.log(i);
}