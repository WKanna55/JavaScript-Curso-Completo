/** APIs tienen estos metodos, ejemplo "todos"
 * - listar GET : /todos/{id} (solo 1) | /todos (todos los "todos")
 * - crear POST : /todos
 * - actualizar UPDATE - PATCH : /todos/{id}
 * - eliminar DELETE : /todos/{id}
 */

const url = 'https://jsonplaceholder.typicode.com/todos'; 

fetch(url, {
  method: 'POST', // PUT, PATCH, DELTE, GET(por defecto de la funcion)
  body: JSON.stringify({ title: 'Hola mundo'}),
  headers: { 'Content-Type': 'application/json', Authorization: 'api key', },
  cache: 'no-cache', // default, reload, force-cache, only-if-cached
})
  .then(response => {
    if (response.ok){
      return response.json();
    }
    return Promise.reject(response.status);
  })
  .then(data => console.log(data))
  .catch(message => {message});