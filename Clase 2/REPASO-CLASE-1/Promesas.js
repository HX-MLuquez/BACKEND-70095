// Promise CLASS       el Promise |
var miPromesa1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    if (true) {
      resolve("Bien bien bien");
    } else {
      reject(Error("Algo salió mal"));
    }
  }, 1000);
});
console.log(miPromesa1); // Promise { <pending> }

// miPromesa1.then(()=>{},()=>{})
// miPromesa1.then(()=>{},null)
// // miPromesa1 -> INSTANCIA de la clase OBJETO con métodos
// miPromesa1.then(()=>{},null).catch(null,()=>{})

// //          EXITO         ERROR
// miPromesa1.then(()=>{}).catch(()=>{})

var miPromesa2 = new Promise(function (resolve, reject) {
  if (true) {
    resolve("Sasasa");
  } else {
    reject(Error("Algo salió mal"));
  }
});

miPromesa1
  .then((res) => {
    console.log(res);
    var text = res + " hola que haces";
  })
  .then((e) => {
    console.log(e);
  });
