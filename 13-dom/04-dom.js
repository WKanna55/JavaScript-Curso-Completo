// manipular el DOM

let el = document.createElement('p');
el.innerText = 'Elemento Creado';

// recibe texto y nodos
document.body.append(el); // agregando al final del doc

// quitar el elemento
el.remove();

// agregar al comienzo
document.body.prepend(el);

// el ultimo llamado de append o prepend es el que se ejecuta

// reemplazar elementos

let div = document.createElement('div');
div.innerText = 'Soy un texto';

el.replaceWith(div);


// alternativa para reemplazar
// nodo padre
document.body.replaceChild(el, div);


// eliminar 
document.body.removeChild(el);

// agregar
// solo recibe nodos
document.body.appendChild(el);
// no existe preprendCHild

// agregar un elemento en una posicion especifica, no al inicio ni al final
//document.body.insertBefore(div, el);

// insertar de manera adyancente
document.body.insertAdjacentElement('beforebegin', div); // fuera del body
document.body.insertAdjacentElement('afterbegin', div); // fuera del body

//document.body.insertAdjacentHTML
//document.body.insertAdjacentText