/*
Realizar un programa que cree un archivo en el cual escriba la fecha y la hora actual. 
Posteriormente leer el archivo y mostrar el contenido por consola. 
Utilizar el módulo fs y sus operaciones de tipo callback.
*/

const fs = require("fs");

const path = "fecha_hora.txt";

function obtenerHora() {
  const ahora = new Date();
  const formato_hora = `${ahora.toLocaleDateString()} ${ahora.toLocaleTimeString()}`;
  return formato_hora;
}

function leer() {
  fs.readFile(path, "utf8", (err, data) => {
    if (err) {
      console.log("Error al leer", err);
    } else {
      console.log("Lectura: ");
      console.log(data);
    }
  });
}

function escribir_leer() {
  const contenido = obtenerHora();
  fs.writeFile(path, contenido, (err) => {
    if (err) {
      console.log("Error al escribir ...", err);
    } else {
      console.log("La fecha y hora se guardo BIEN");
      leer();
    }
  });
}

escribir_leer();
