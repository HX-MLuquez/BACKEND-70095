/*
TODO: CLOSURE
Para crear una closure necesitamos DOS pasos:

Paso 1: Definir una Función Dentro de Otra Función
Las closures se crean cuando una función define otra función dentro de sí misma. 
Esta función interna es lo que se conoce como la closure. La función interna tiene 
acceso a las variables y parámetros de la función externa.

Paso 2: Acceder al Contexto de la Función Padre
La closure puede (cual debe, ju) acceder a variables y parámetros que se encuentran en 
la función externa, incluso después de que la función externa haya finalizado su ejecución. 
Esto permite encapsular datos y comportamientos dentro de la función interna.

*/

function contador() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

var contador1 = contador(); // function () { count++; return  count++;};
console.log(contador1());
console.log(contador1());
console.log(contador1());
console.log(contador1());

var contador2 = contador(); // function () { count++; return  count++;};
console.log(contador2());
console.log(contador2());


function list_closure(){
    const hulk = []
    return function(value){
        hulk.push(value)
        return hulk
    }
}

var mi_lista1 = list_closure()
console.log(mi_lista1("pepe"))
console.log(mi_lista1("juan"))

var mi_lista2 = list_closure()
console.log(mi_lista2("manolo"))