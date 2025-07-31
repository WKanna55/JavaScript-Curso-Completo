const letras = ['a', 'b'];

// cuando creamos variables con const no permite reasignar a otra cosa
// letras = c; error!

// tenemos 3 metodos para modificar el contenido de letras:

// agregar elementos al final de un array
letras.push('c', 'd');

console.log(letras);

// agregar al comienzo del array

letras.unshift('y', 'z');

console.log(letras);

// agregar elementos en una posicion especifica
// usamos el indice de la posicion que queremos
// los indices inician en 0, si queremos agregar
// despues de 'a' entonces seria el indice de 'a' 2(+1) 3
// splice tambien sirve para eliminar
// argumentos usados en splice
// indice, elem. eliminar, valores a agregar
letras.splice(3, 0, 1, 2);

console.log(letras);