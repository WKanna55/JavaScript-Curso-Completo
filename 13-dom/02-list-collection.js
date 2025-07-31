let collection = document.getElementsByTagName('p'); // Html collection
let list = document.querySelectorAll('p'); // Node list
console.log(collection, list); // 4 elmts cada uno


// --------------------------------- COLLECTION

console.log('--------------------------------- COLLECTION');
// Buscar elementos en una Collection
let item1 = collection.namedItem('chanchito');
console.log(item1);

let item2 = collection.item(3);
console.log(item2);

let item3 = collection[3];
console.log(item3);

// iterar en collection
// HTML collection no tiene metodos para iterar

// con for of
for (let el of collection){
  console.log(el);
}

// transformar en array
[...collection].forEach(x => console.log(x));

console.log('--------------------------------- NODELIST');

// --------------------------------- NODELIST
// acceder
// solo por sus indeces no por valores nombrados como collection
let nodeItem1 = list.item(3);
let nodeItem2 = list[3];
console.log(nodeItem1);
console.log(nodeItem2);

// iterar nodelist
// metodo propio forEach
list.forEach(x => console.log(x));

// entries, keys, values
// estos devuelven iteradores, no arrays

// entries
let entries = list.entries();
console.log(entries.next()); // indice , elemento - array
console.log(entries.next()); // siguiente elemento
// keys igual que values anteriore pero solo devuelve indice
let keys = list.keys();

// values igual que values anteriore pero solo devuelve el valor(elemento)
let values = keys.values();

// destructuring en array
[...list].forEach(x => console.log(x));