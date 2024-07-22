// ... SPREAD  REST

const objOriginal = {
  a: "1",
  b: "2",
};

const objDos = {
  z: "1",
  w: "33",
  a: "nanana",
};

const copia_de_verdad_con_spread = { ...objOriginal, ...objDos };
console.log(copia_de_verdad_con_spread);

console.log(objOriginal);

const copia_mentira = objOriginal;

copia_mentira.a = 3213;
console.log(objOriginal);

const list1 = [2, 564, 12];
const list2 = ["muuuuuu"];

const list_spredada = [...list2, ...list1];
console.log(list_spredada);

// REST - RESTO

//! Por POSICION  a apunta al primer elemento
const [a, b, c, ...resto] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(a);
console.log(resto);

// Destructuring

const persona = {
  nombre: "Dilma",
  edad: 87,
  id: 21,
};

const { id, ...restoPersona } = persona;
console.log(id);
console.log(restoPersona);
