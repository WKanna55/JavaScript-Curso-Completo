// For in => Sirve para iterar las propiedades de un objeto
//            cuando no sabemos las propiedades(ejecucionm en la aplicacion)

let user = {
  id: 1,
  name: 'Chanchito feliz',
  age: 25,
}

for (let prop in user){
  console.log(prop); // sacar las propiedades del objeto
  console.log(user[prop]); // sacar los valores de las propiedades de un objeto
}

// antiguamente se usaba el for in para sacar todos los valores de un array
// ya que no existia el for of, pero mejor usar el for of

// ejemplo
let animales = ['Chanchito', 'Dragon', 'Perrito']
for(let indice in animales){
  console.log(indice, animales[indice])
}

