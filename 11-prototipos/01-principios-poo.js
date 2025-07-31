/**
 *        4 principios de Poo
 * 1. Encapsulacion: Agrupar metodos y propiedades que tengan sentido
 * 2. Abstraccion: Esconder detalles de implementacion
 * 3. Herencia: Heredar propiedades y metodos de un objeto a otro. Padre -> Hijo
 * 4. Polimorfismo: Un mismo metodo heredado puede tener diferentes implementaciones 
 *                    de los hijos
 */
/* Encapsulacion: propiedades y metodos con sentido
const user = {
  nombre,
  apellido,
  getNombreCompleto(){}
} */

/* Abstraccion: Aun sin emplementar esto sabemos lo que se esta haciendo
const user = new User();
user.password = 'nueva contraseña';
user.save();
 */

/** Herencia: Un padre hereda sus propiedades y metodos a sus hijos
 * entidad => id, nombre, guardar(){}
 * usuario : {entidad}
 * restaurante : {entidad}
  * ---
 * Funcion Constructora padre(FCPadre)(entidad) -> Hijo(usuario)
 * 
 * En muchos lenguajes de programacion a la FCPadre se le llama Clase(Class)
 * En javascript tambien hay una Clase(class) pero este es totalmente diferente
 * a lo que se refieren los otros lenguajes de programacion, no se comportan igual
 * por ello lo llamaremos FCPadre
 * 
 * js es un lenguaje orientado en prototipos
 * la diferencia la veremos en la siguiente leccion
 * Conclusion: para heredar usamos funciones constructoras
 */

/** Polimorfismo: Un metodo o propiedad heredado puede tener una implementacion diferente
 * entidad => id, nombre, guardar(){guardando db postgres}
 * usuario : {entidad} => nombre: 'juan', guardar(){guardando db mongodb}
 */

