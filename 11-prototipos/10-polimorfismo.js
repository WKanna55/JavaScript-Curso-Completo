/**
 * Muchos objetos se crearon de formas distintas pero comparten un mismo metodo
 */

function Select() {}
Select.prototype.render = function() {
  console.log('renderizando select');
}

function Checkbox() {}
Checkbox.prototype.render = function() {
  console.log('renderizando checkbox');
}

// queremos llamar este metodo en todos los componentes, imaginemos que tenemos cientos
// y cientos, si no tuvieran el nombre de la propiedad render en comun seria muy engorroso


let componentes = [
  new Select(),
  new Checkbox(),
];

componentes.forEach(c => c.render());

// el polimorfismo en este caso nos sirve para renderizar todos los componentes, bastante util