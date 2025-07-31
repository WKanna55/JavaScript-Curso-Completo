// const url = 'https://jsonplaceholder.typicode.com/todos/1';
const url = 'https://jsonplaceholder.typicode.com/todos/a'; // eror 404
// se crea apartir de una FC Response
// si falla la peticion al server fetch siempre tiene exito, no es una promesa
// talvez no se quiera este comportamiento
fetch(url)
  .then(response => {
    console.log(response); // nos da varias propiedades como el cors, la url, 
                          // el codigo de resoyhesta del servidpor
    // ok: son respuestas de 200 - 299
    if (response.ok) { // tenemos que manejar esta propiedad ok para devolver errores
      return response.text();
    }
    //return response.json(); // esto devuelve una promesa por lo cual se puede encadenar
    //return response.text(); // si la api no devuelve un objeto json, sino html por ejemplo
                            // se usa .text
    return Promise.reject(response.status);
    
  })
  .then(data => console.log(data))
  .catch(message => console.log({message}))
