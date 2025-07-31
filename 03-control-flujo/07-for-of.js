// For of => util para iterar arrays, en otros lenguajes se llama for each

let animales = ['Chanchito', 'Dragon', 'Perrito']

// imprime cada uno de los elementos por separado de manera sencilla
for (let animal of animales){
  console.log(animal); 
}

// tambien se puede hacer con el while y el for convencional, pero es mas engorroso
// ya que tienes que usar los indices explicitamente
// while
console.log('Imprimiendo con while');

let i = 0;
while(i<animales.length){
  console.log(animales[i]);
  i++;
}

// for
console.log('Imprimiendo con for');
for(let i = 0; i < animales.length; i++){
  console.log(animales[i]);
}