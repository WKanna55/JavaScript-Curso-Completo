// buscar en un array
// depende si es un valor primitivo o uno de referencia

// en aca veremos primitivos

const letras = ['a', 'b', 1, 'c', 'd', 1];

// saber si se encuentran elementos dentro de un array
// devuelve el indice del elemento, siempre y cuando este dentro del array
// si no se encuentra devuelve -1
console.log(letras.indexOf('c'));
// si tenemos 2 elementos iguales devuelve el primero que encuentra
console.log(letras.indexOf(1));

// si queremos que nos devuelva el indice del ultimo elemento igual
// usamos lastIndexOf()
console.log(letras.lastIndexOf(1));

// si solo queremos saber si el elemento se encuentra
// usamos includes() que devuelve booleano
console.log(letras.includes('d'));
// antiguamente se usaba esto
// console.log(letras.indexOf('d') !== -1 );

// cuiando estamos buscando datos primitivos
// el tipo ded dato es importante
console.log(letras.indexOf('1'));

// tambien si no queremos buscar desde el inicio del array
// .indexOf() recibe un segundo argumento para buscar desde cierto indice
// em este caso inicia desde el indice 3
console.log(letras.indexOf(1, 3));
