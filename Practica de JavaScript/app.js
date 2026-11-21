let asiento = "1A";       // let: su valor PUEDE cambiar
asiento = "2B";           // ✅ se puede reasignar
asiento = "500C"
console.log(asiento);     // "2B"

const vuelo = "AE-204";   // const: NO se puede reasignar
// vuelo = "AE-999";      // ❌ quita el // y verás el error

let precio;               // declarada sin valor
console.log(precio);      // undefined (todavía no tiene valor)

// Reglas de nombres: camelCase, sin espacios ni tildes, no empezar con número
let nombrePasajero = "Ana";
console.log(nombrePasajero);
// var es la forma ANTIGUA: no la uses

// 1. Declaración clásica
function precioFinal(precio, impuesto) {   // parámetros
  return precio + precio * impuesto;       // return: devuelve el resultado
}
console.log(precioFinal(100, 0.15));       // 115

function saludo(nombre){
    return `Hola ${nombre} desde saludo funcion normal`;
};
console.log(saludo("Rey"));

// 2. Función flecha (la más usada hoy)
const saludar = (nombre) => {
  return `Hola ${nombre} desde saludar funcion flecha`;
};
console.log(saludar("Ana"));

const saludar2 = (nombre) => `Hola ${nombre} desde saludar funcion flecha`;
console.log(saludar2("Rony"));

// 3. Flecha corta: una sola línea = return automático
const doble = n => n * 2;
console.log(doble(21));                    // 42

// Parámetro con valor por defecto
function reservar(nombre, clase = "económica") {
  console.log(`${nombre} en ${clase}`);
}
reservar("Luis");                  // usa "económica"
reservar("Marta", "ejecutiva");

let pasajeros = [
  { nombre: "Ana",   edad: 28, vip: true  },
  { nombre: "Luis",  edad: 9,  vip: false },
  { nombre: "Marta", edad: 45, vip: true  },
];

// map: transforma CADA elemento → nuevo array del mismo tamaño
let nombres = pasajeros.map(p => p.nombre);
console.log(nombres);                       // ["Ana","Luis","Marta"]

// filter: se queda con los que cumplen → array más corto
let vips = pasajeros.filter(p => p.vip);
console.log(vips.length);                   // 2

// find: devuelve el PRIMERO que cumple (o undefined)
let nino = pasajeros.find(p => p.edad < 12);
console.log(nino.nombre);                   // "Luis"

// JSON = el formato de TEXTO para enviar datos (al servidor, a un archivo)
let p = { nombre: "Ana", asiento: "1A" };

let texto = JSON.stringify(p);    // objeto → texto JSON
console.log(texto);               // '{"nombre":"Ana","asiento":"1A"}'
console.log(typeof texto);        // "string"

let objeto = JSON.parse(texto);   // texto JSON → objeto
console.log(objeto.nombre);       // "Ana"

class Pasajero {
  // constructor = __init__ de Python: se ejecuta con new
  constructor(nombre, asiento) {
    this.nombre = nombre;        // this = self
    this.asiento = asiento;
  }
  // método: función que pertenece a la clase (sin "function")
  presentar() {
    return `${this.nombre} (${this.asiento})`;
  }
}

const a = new Pasajero("Ana", "1A");   // new crea el objeto
const b = new Pasajero("Luis", "2B");
console.log(a.presentar());
console.log(b.nombre);

// Herencia con extends (como class Vip(Pasajero) en Python)
class PasajeroVip extends Pasajero {
  presentar() {
    return "⭐ " + super.presentar();  // super = el método del padre
  }
}
console.log(new PasajeroVip("Marta", "1C").presentar());

