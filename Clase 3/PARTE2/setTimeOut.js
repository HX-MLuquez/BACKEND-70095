// function saludar(){
//     console.log("hola")
// }

function iniciarTempo(cb) {
  setTimeout(() => {
    console.log("Iniciando: ");
    cb("ojo al piojo");
  }, 2000); // 2 seg
}

function imprimirText(text){
    console.log(text)
}

iniciarTempo(imprimirText)