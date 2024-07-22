// VERSION SIMPLE
// var count = 0;

// function iniciarContador() {
//   console.log("Iniciado: ");
//   let intervalo = setInterval(() => {
//     count++;
//     console.log(count);
//     if (count > 7) {
//         console.log("Detener el INTERVALO LOCO")
//       clearInterval(intervalo);
//     }
//   }, 1000);
// }

// iniciarContador()

// VERSION PRO

let count = 0;
let intervalo = null;

function iniciarContador() {
  console.log("Iniciado: ");
  intervalo = setInterval(() => {
    count++;
    console.log(count);
    // if (count > 7) {
    //   console.log("Detener el INTERVALO LOCO");
    //   clearInterval(intervalo);
    // }
  }, 1000);
}

function detener(){
    console.log("Detener el INTERVALO LOCO");
    clearInterval(intervalo)
}

iniciarContador();
setTimeout(detener, 5000)
