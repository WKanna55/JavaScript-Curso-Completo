// que es un bit

// Decimal: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
// Binario: 0, 1

// bit: 0 1
// Byte: 8 bits
// Byte: 00000001 -> 1
// Byte: 00000010 -> 2
// Byte: 00000011 -> 3
// Byte: 00000100 -> 4
// Byte: 00000101 -> 5
// Byte: 00000110 -> 6
// Byte: 00000111 -> 7
// etc ...

// en bitwise tenemos un OR( | ) y un AND( & )

//                      OR bitwise |
// el operador logico de Bitwise usa base logica binaria
// no selecciona uno u otro, sino que toma bytes de cada uno
// y crea un nuevo byte apartir de ellos
// en base a que si uno dee los digitos posee un 1 este lo escribe
// en el nuevo byte
// ...100(4)
// ...011(3)

// escribe un 1 si los numeros a comparar lo tiene, en esa misma posicion
// ejemplo
                    //             por 3 y 1
                    //                  31
                    //                  ||
console.log(1 | 3); // daria esto 00000011 (3) resultado 3

                    //            por 4 y 1
                    //                 4 1
                    //                 | |
console.log(1 | 4); // daria esto 00000101 (5) resultado 5


// Operador logico bitwise AND &
// igual que OR pero este operador escribe en el nuevo byte
// si ambos numeros contienen un 1 en la misma posicion
// ejemplo
                    //             por 3 y 1
                    // 1 -> 00000001
                    // 3 -> 00000011
                    // solo tienen el ultimo bit en comun
                    //                  3y1
                    //                  x|
console.log(1 & 3); // daria esto 00000001 (1) resultado 1

                    //            por 4 y 1
                    // 1 -> 00000001
                    // 4 -> 00000100
                    // ambos no tienen bits 1 en comun
                    //                 4y1
                    //                 x x
console.log(1 & 4); // daria esto 00000000 (0) resultado 0