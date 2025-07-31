// else -> condigo cuando la condicion no se cumple
// puede ser una linea o multiples lineas(bloque de codigo)
// las evaluaciones se hace de arriba hacia abajo
// OJO: si se cumple una condicion ignora todo lo demas.
let edad = 25;
edad = 15;

if (edad > 17) {
  console.log('Usuario mayor de edad');
} else if(edad > 13){
  console.log('Usuario necesita estar acompañado de sus padres');
} else {
  console.log('No puede ingresar');
}