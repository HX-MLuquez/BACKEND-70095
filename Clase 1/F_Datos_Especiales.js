// FUNCIONES


function declarada(texto){
    return texto 
}

console.log(declarada) // [Function: declarada]

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



// Para EJECUTAR debemos INVOCAR - LLAMAR - EJECUTAR
console.log(declarada("asgasdfgafd"))
var result = declarada("sisi") // === "sisi"
console.log(result)