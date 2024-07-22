const fs = require("fs")

try {
    const data = fs.readFileSync("text.txt", "utf-8")
    console.log(data)
} catch (error) {
    console.log(error)
}


try {
    const data = fs.writeFileSync("info.txt", "Todas las hojas son del viento ...")
    console.log(data)
    console.log("Archivo buscado y/o creado y sobre-escrito")
} catch (error) {
    console.log(error)
}


try {
    const data = fs.appendFileSync("info.txt", "ya que el las mueve hasta la muerte ...")
    console.log(data)
    console.log("Archivo buscado y escrito el texto al final")
} catch (error) {
    console.log(error)
}


try {
    const data = fs.unlinkSync("info.txt")
    console.log(data)
    console.log("Archivo buscado y eliminado")
} catch (error) {
    console.log(error)
}

