/*
Escribir un programa ejecutable bajo node.js que realice las siguientes acciones:
Abra una terminal en el directorio del archivo y ejecute la instrucción: npm init -y.
Esto creará un archivo especial (lo veremos más adelante) de nombre package.json
Lea el archivo package.json y declare un objeto con el siguiente formato y datos

Muestre por consola el objeto info luego de leer el archivo
Guardar el objeto info en un archivo llamado info.json dentro de la misma carpeta de package.json
Incluir el manejo de errores (con throw new Error)
Utilizar el módulo promises de fs dentro de una función async/await y utilizar 
JSON.stringify + JSON.parse para poder hacer las transformaciones json->objeto y viceversa
obj. -> JSON.stringify -> json
json -> JSON.parse  -> OBJ
*/

const fs = require("fs").promises;
const path = require("path")


// 1. Leer .json
// 2. Pasar a objeto 
// 3. mostrar
// 4. Guardar en otro .json


async function main(){

    const path_perfect = path.join(__dirname, "package.json")
    const contenido_original = await fs.readFile(path_perfect, "utf8")

    const info = {
        contenidoOriginal: contenido_original,
        contenidoJson: JSON.parse(contenido_original),
        size: Buffer.byteLength(contenido_original, "utf8")
    }
    console.log(info)

    const info_path = path.join(__dirname, "info.json")
    await fs.writeFile(info_path, JSON.stringify(info, null, 2) )
}

main()