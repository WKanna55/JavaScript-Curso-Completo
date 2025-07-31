// Usaando fetch con una funcion await
// talvez queramos cancelar el fetch, omo un usuario dando a cancelar

let controller = new AbortController(); // objeto para cancelar
let { signal } = controller; // objeect destructuring

async function getTodos() {
  const url = 'https://jsonplaceholder.typicode.com/todos';
  try {
    const response = await fetch(url, { signal });
    const data = await response.json();
    console.log(data);
  } catch (e) {
    console.log('error:', e);
  }
}

getTodos();
controller.abort();// de esta manera se canceclan las peticiones