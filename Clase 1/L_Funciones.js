
// Declarada - Expresada - Arrow function (return implícito)
var nene = "222"
//* Las FUNCIONES son bloques cerrados - CONTEXTOS - CAJAS
function declarada(texto){
    function sumar(){
        var nene = "hi"
    }
    console.log(nene) // 
    return texto 
}
console.log(nene) //! nene is not defined  

console.log(declarada()) // [Function: declarada]

declarada.mono = "Hello"
console.log(declarada) // [Function: declarada] { mono: 'Hello' }
console.log(declarada.mono) 


var function_expresada = function(){
    return true
}

//                                function(a){return a}
var funcion_flecha_o_arrow_function = (a) => a // return implícito

var arrow_con_varias_lineas = (e)=> {
    return e
}