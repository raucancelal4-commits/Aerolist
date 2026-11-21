// Un OBJETO: como un diccionario de Python, pero las claves van sin comillas
const pasajero = { numero: 1005, nombre: "Diana", edad: 17, asiento: "3C" };

// Una FUNCIÓN que recibe un pasajero y RETORNA true o false
function esMenor(p) {
  return p.edad < 18;              // p.edad = el dato "edad" del objeto p
}
// if / else con llaves { } en vez de dos puntos y sangría
if (esMenor(pasajero)) {
  // las comillas invertidas ` ` permiten meter variables con ${ }
  console.log(`${pasajero.nombre} viaja con un adulto`);
} else {
  console.log(`${pasajero.nombre} está en el asiento ${pasajero.asiento}`);
}
console.log(`Asiento #: ${pasajero.asiento}`);
// → en la consola aparece: Diana está en el asiento 3C