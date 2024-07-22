var list1 = [2, 1, 3, "pepe", 4];

list1.forEach((e) => e);

//  0  1  2   3     4

// [2, 1, 3, "pepe", 4];
// Esta function se la paso al MAP y el la ejecuta n cant de veces
function cambiarPepe(element, index) {
  if (element === "pepe") {
    element = "manolo";
    return element;
  }
}
var swap = false;
//    Para c/element ejecuta la function CB
var result = list1.map(cambiarPepe); // GENERA-NUEVA-LISTA   --> [ ]
console.log(result);
console.log(swap);
/*
[2, 1, 3, "pepe", 4].map  <- CB cambiarPepe

listaResult []  //! el forEach no hace esta listaResult [] 

cambiarPepe(2,0)   -> retornado -> pushea a listaResult
cambiarPepe(1,1)  -> retornado -> pushea a listaResult
cambiarPepe(3,2)  -> retornado -> pushea a listaResult
cambiarPepe("pepe",3)  -> retornado -> pushea a listaResult
cambiarPepe(4,4)  -> retornado -> pushea a listaResult
*/

// [2, 1, 3, "pepe", 4].filter((e)=>{})

function miMap(lista, callback) {
  const nuevaLista = [];
  for (let i = 0; i < lista.length; i++) {
    nuevaLista.push(callback(lista[i], i));
  }
  return nuevaLista;
}

var miResult = miMap([2, 1, 3, "pepe", 4], cambiarPepe);
console.log(miResult);

const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;

function operaciones(num1, num2, operadorCallBack) {
  return operadorCallBack(num1, num2);
}

console.log(operaciones(7,5,sumar))
console.log(operaciones(7,5,restar))