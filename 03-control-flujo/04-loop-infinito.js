// un bucle que se ejecuta infinitamente, ocasiona problemas

let i = 0;

while (i < 10) {
  console.log(i);
  i++; // para infinito comentar esta linea
}

console.log('Fuera del while');
