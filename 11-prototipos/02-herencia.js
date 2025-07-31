/** Herencia
 * Ayuda a reutilizar el codigo 
 * 
 * Supongamois que tenemos 2 entidades que comparten propiedades similares
 * 
 * Usuario        |         Producto
 * - id                     - id
 * - guardar                - guardar
 * 
 * Esto se puede heredar de una entidad padre superior
 * 
 * Entidad
 * - id 
 * - guardar  
 * 
 * Usuario extends Entidad | Producto extends Entidad
 * * esto ocurre en otros lenguajes de progrmacaion
 *      pero no en javascript
 * 
 * En JavaScript pasa esto:
 * Si ejecutamos guardar en user, y este no lo tiene implementado
 * Va a un nivel superior llamado prototipo, y si este lo tiene lo ejecuta
 *
 *                                    |------ null -> error no se encontro el metodo
 *                                    |
 *                    |----------{prototipo}
 *                    |
 *   |----------{prototipo}
 *   |
 * {user}
 * 
 * Entonces:
 * - Cuando trabajamos con clases, las propiedades y metodos se copian al objeto
 * - Cuando trabajamos con prototipos, un objeto se vincula a otro superior
 */


