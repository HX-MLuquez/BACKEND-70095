// Object.entries Object.values  Object.keys

const animal = {
  // KEY    VALUE
  nombre: "oso",
  estado: "cariñoso",
  edad: 3,
};

console.log(animal);

console.log(Object.keys(animal).length);
console.log(Object.keys(animal));
console.log(Object.values(animal));

console.log(Object.entries(animal));
// [ [ 'nombre', 'oso' ], [ 'estado', 'cariñoso' ], [ 'edad', 3 ] ]

console.log(Object.entries(animal)[1][1]);

// AL TENER ESTRUCTURAS ANIDADAS  [[][][]]   [[[[[]]]]]   {{{{{}}}}}  [{}{}{}] [{[]}{[]}]
//! DOT NOTATION || BRACKET NOTATION || INDEX

// NULLISH

//! is not defined es que no existe y ROMPE
var nana = 0;

let nombre = nana && nana;
console.log(nombre);

let nombre2 = nana || "Nina";
console.log(nombre2);

let nombre3 = nana ?? "Niiiiiña"; // UNDEFINED NULL FALSE
console.log(nombre3);

// VAR PRIVADA - ENCAPSULAMIENTO

class Persona {
  #nombre;
  constructor(nombre) {
    this.#nombre = nombre;
  }
  getName(){
    return this.#nombre
  }
  changeName(name){
    this.#nombre = name
  }
}
var per1 = new Persona("Mau");
console.log(per1.getName());
// per1.nombre = 1221231;

console.log(per1.nombre);
