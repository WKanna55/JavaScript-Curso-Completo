// crear elementos de una forma mas compleja

let el = document.createElement('p');

el.innerText = "Elemento creado";

document.body.append(el);

// se crea literalmente string texto plano
//el.innerText = "<ul><li>Elemento creado</li></ul>"; 
// para solucionar esto se hace un:
//el.innerHTML = "<ul><li>Elemento creado</li></ul>";

el.style = 'background-color: red; font-weight:bold;'; //cambiar estilo
el.className = 'parrafo'; // cambiar clase
el.id = 'mi-parrafo'; // cambiar id
//el.mipropiedad = 'mi propiedad'; // una propiedad personalizada, no funciona
el.setAttribute('mipropiedad', 'mi propiedad'); // agregar una propiedad personalizada
      // hay que tener cuidado con setAtribbute: 
      // talvez no se quiere usar elementos HTML como forma de alamacenar info
      // para ello mejor usar javascript

//obtener valor de un atributo
el.getAttribute('mipropiedad');
console.log(el.getAttribute('mipropiedad'));

// saber si exite
el.hasAttribute('mipropiedad');
console.log(el.getAttribute('mipropiedad'));

