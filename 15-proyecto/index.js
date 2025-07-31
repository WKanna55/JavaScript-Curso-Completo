let serialize = target => Array.from(target.elements)
                            .reduce((acc, el) => {
                              if (!el.name) return acc;
                              acc[el.name] = el.value;
                              return acc;
                            }, {})

class User {
  static #url = 'https://jsonplaceholder.typicode.com/users';
  static #users = [];
  static #ul = document.createElement('ul');
  static #form = document.createElement('form');
  static #initialValues = {
    name: '',
    email: '',
  };

  constructor(data){
    this.name = data.name;
    this.email = data.email;
  }

  static async getAll(){
    try {
      const response = await fetch(this.#url);
      // error detallado no solo un objeto ya que podemos acceder
      if (!response.ok) throw response; 
      this.#users = await response.json(); // referencia a usuarios ya cargados
      return this.#users;
    } catch (e) {
      console.log('Error', e);
    }
  }

  static renderUser(u){
    let li = document.createElement('li');
    li.innerText = u.name
    return li;
  }

  static render(){
    //this.#ul = ;
    let users = this.#users;
    users.forEach(u => this.#ul.appendChild(this.renderUser(u)));
    return this.#ul;
  }

  static onSubmit(e){ // tiene nuevo contexto, HTML, this deberia ser el usuario
    e.preventDefault();
    let data = serialize(e.target);
    //console.log(data);
    let users = new User(data);
    const errors = users.validate();
    // validar si hay errores
    if (Object.keys(errors).length > 0) {
      //console.log(this); // HTML?, 
      this.#form.innerHTML = this.formHTML({ data, errors});
      return
    }
    // guardar si todo ok
    users.save();
  }

  save() {
    return User.save(this);
  }

  static async save(user){
    try {
      const response = await fetch(this.#url, {
        method: 'POST',
        headers: {'Content-Type': 'Application/json', Authorization: 'apikey',},
        body: JSON.stringify(user),
        cache: 'no-cache',
      });
      const data = await response.json();
      this.#users.unshift(data);
      this.#ul.prepend(this.renderUser(data));
      this.renderForm();
    } catch (e) {
      console.log(e);
    }
  }

  validate() {
    let errors = {};
    if (!this.name){
      errors.name = "Nombre es obligatorio";
    }
    if (!this.email){
      errors.email = "Correo es obligatorio";
    }
    return errors;
  }

  static formHTML({ data, errors }){
    return `
    <form>
      <div>
        <label>Nombre</label>
        <input name="name" value="${data.name}" />
        ${errors.name || ''}
      </div>
      <div>
        <label>Correo</label>
        <input name="email" value="${data.email}" />
        ${errors.email || ''}
      </div>
      <input type="submit" values="Enviar" />
    </form>
    `;
  }

  static renderForm(){
    // on submit, initial values, error, html
    this.#form.onsubmit = this.onSubmit.bind(this); // cambiando el contexto de HTML a User
    this.#form.innerHTML = this.formHTML({
      data: this.#initialValues,
      errors: {},
    });
    return this.#form;
  }
}

async function main() {
  const users = await User.getAll();
  //console.log(users);
  const template = User.render(); 
  //console.log(template);
  const form = User.renderForm();

  document.body.insertAdjacentElement('afterbegin', template);
  document.body.insertAdjacentElement('afterbegin', form);
}

main();