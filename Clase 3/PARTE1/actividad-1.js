/*
Crear un proyecto de node que genere 10000 números aleatorios en un rango de 1 a 20. 
Indicar por consola la finalización de esta operación con un mensaje.

Mediante el uso de Promesas, crear un objeto cuyas claves sean los números salidos y 
el valor asociado a cada clave será la cantidad de veces que salió dicho número. 
Representar por consola los resultados

Nota: Considerar que esta operación debe realizarse de forma asíncrona.

{
    5: 1, -> incrementa 5: + 1
    2: 1
}
*/

const generaObjetNumRandom = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      let numbers = [];
      for (let i = 0; i < 10000; i++) {
        numbers.push(Math.floor(Math.random() * 20) + 1); // genera un numero entre 1 y 20
      }
      res(numbers);
    }, 1000);
  });
};

var resultTestFuncPromise = generaObjetNumRandom();
console.log("01", resultTestFuncPromise); // <promesa>

resultTestFuncPromise.then(
  (numbers) => {
    let objetResult = {}
    console.log("02", numbers);
    numbers.forEach(num => {
        // objetResult[num] = 1
        if(objetResult[num]){
            objetResult[num] += 1
        } else {
            objetResult[num] = 1
        }
    });
    console.log("Fin")
    console.log(objetResult)
  },
  () => {}
);

