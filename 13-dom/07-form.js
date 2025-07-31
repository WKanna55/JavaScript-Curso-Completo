
let validate = data => {
  let errors = {};
  if (!data.name) {
    errors.name = 'Campo Obligatorio';
  }
  if (!data.lastname) {
    errors.lastname = 'Campo Obligatorio';
  }
  return errors;
}

// otra manera de renderizar elementos
// ya no usar el document.createElement a cada rato

let initialValues = {
  name: '',
  lastname: '',
}

let render = ({ data, errors }) => {
  return `
    <form name='formulario'>
      <div>
        <label>Nombre:</label>
        <input name="name" value="${data.name}" />
        ${errors.name || ''}
      </div>
      <div>
        <label>Apellido:</label>
        <input name="lastname" value="${data.lastname}" />
        ${errors.lastname || ''}
      </div>
      <div>
        <button>Enviar</button>
      </div>
    </form>
  `;
}




let form = document.createElement('form');
form.innerHTML = render({ data: initialValues, errors : {} });
document.body.append(form);

form.addEventListener('submit', e => {
  e.preventDefault();
  console.log(e.target.elements); // por es6
  let data = Array.from(e.target.elements)
  .reduce((acc, el) => {
    if (!el.name) return acc; // no agregar elementos sin nombre como el boton
    acc[el.name] = el.value;
    return acc;
  }, {});

  console.log(data);
  // validar los datos
  const errors = validate(data);
  console.log(errors);

  if (Object.keys(errors).length > 0){
    let html = render({ errors, data });
    form.innerHTML = html;
    return;
  }
  // utilizar promesas o asincronia par aenviar los datos al server
});

