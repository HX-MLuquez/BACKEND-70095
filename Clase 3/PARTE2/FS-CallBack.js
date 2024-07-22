const fs = require("fs");

// Como manejamos el ERROR o la DATA por medio de la function CB

const data = fs.writeFile("archivo.log", "mensaje", (err) => {
  if (err) {
    console.log("Error al escribir ...", err);
  } else {
    console.log("Archivo gurdado BIEN");
  }
});
console.log(data);

fs.readFile("archivosdfg.log", "utf8", (err, data) => {
  if (err) {
    console.log("Error al escribir ...", err);
  } else {
    console.log("Archivo gurdado BIEN");
    console.log(data);
  }
});

fs.appendFile("archivo.log", "vamos a agregar este texto", (err) => {
  if (err) {
    console.log("Error al escribir ...", err);
  } else {
    console.log("Archivo escrito BIEN");
  }
});
