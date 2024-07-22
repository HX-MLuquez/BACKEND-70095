const fs = require("fs").promises;

async function leer() {
  try {
    const data = await fs.readFileSync("text.txt", "utf-8");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
leer();

async function escribir() {
  try {
    const data = await fs.writeFileSync(
      "info.txt",
      "Todas las hojas son del viento ..."
    );
    console.log(data);
    console.log("Archivo buscado y/o creado y sobre-escrito");
  } catch (error) {
    console.log(error);
  }
}
escribir();

async function appendear() {
  try {
    const data = await fs.appendFileSync(
      "info.txt",
      "ya que el las mueve hasta la muerte ..."
    );
    console.log(data);
    console.log("Archivo buscado y escrito el texto al final");
  } catch (error) {
    console.log(error);
  }
}
appendear();

async function eliminar() {
  try {
    const data = await fs.unlinkSync("info.txt");
    console.log(data);
    console.log("Archivo buscado y eliminado");
  } catch (error) {
    console.log(error);
  }
}
eliminar();
