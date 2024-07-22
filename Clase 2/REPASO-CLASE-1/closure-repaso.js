

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


// function padre(){
//     const cache = []
//     return function hija(value){
//         cache.push(value)
//     }
// }

function padre(cache = []){
    return function hija(value){
        cache.push(value)
        return cache
    }
}

var instancia_hija1 = padre()
console.log(instancia_hija1) // function(value){cache.push(value)} <-> cache []
console.log(instancia_hija1(32))
console.log(instancia_hija1(4))
console.log(instancia_hija1("sws"))


var instancia_hija2 = padre()
console.log(instancia_hija2) // function(value){cache.push(value)} <-> cache [] 
console.log(instancia_hija2(9))
console.log(instancia_hija2(7))
console.log(instancia_hija2("dsgd"))