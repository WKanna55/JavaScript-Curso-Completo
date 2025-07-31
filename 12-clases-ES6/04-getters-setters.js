class Restaurants {
  #timetable; // privado generalemente se usa en conjunto con los setter y getters
  constructor(name){
    this.name = name;
  }
  get timetable() {
    return this.#timetable;
  }
  set timetable(value) { // siempre resive un valor
    let date = new Date(value);
    let time = date.getTime();
    if (Number.isNaN(time)){
      throw new Error('Fecha invalida');
    }
    this.#timetable = date;
  }
}
const r = new Restaurants('BBQ');

// al ingresar una fecha podeemos poner cualquier valor, esto seria erroneo puesto que no
// es un comportamiento deseado
//r.timetable = '1 march 1978';
//r.timetable = false; // estp se puede hacer tranquilamente, por ello deberiamos validar
//console.log(r.timetable);
//new Date(r.timetable)

// por ello podemos poner un setter asi
//r.setTimetable('1 feb 1986');

console.log(r);
//r.timetable = 'Lala'; // da fecvha invalida
r.timetable = '1 dec 2023'; // correcto

console.log(r.timetable);