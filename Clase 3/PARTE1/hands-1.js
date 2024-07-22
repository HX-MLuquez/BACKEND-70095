/*
¿Cómo lo hacemos? Se creará una clase “UsersManager” que permitirá guardar usuarios en un atributo estático. 
El usuario se recibirá con una contraseña en string plano, y se deberá guardar la contraseña hasheada con crypto. 
Utilizar el módulo nativo crypto.

El manager debe contar con los siguientes métodos:
El método “Crear usuario” debe recibir un objeto con los campos:
Nombre
Apellido
Nombre de usuario
Contraseña
El método debe guardar un usuario en un atributo estático llamado “Usuarios”, recordando que 
la contraseña debe estar hasheada por seguridad


El método “Mostrar Usuarios” imprimirá en consola todos los usuarios almacenados.
El método “Validar Usuario” recibirá el nombre de usuario que quiero validar, seguido de la contraseña,  
debe poder leer el json previamente generado con el arreglo de usuarios y hacer la comparación de contraseñas, 
Si coinciden el usuario y la contraseña, devolver un mensaje “Logueado”, caso contrario indicar error 
si el usuario no existe, o si la contraseña no coincide.
*/
const crypto = require("crypto");

class UsersManager {
  static usuarios = [];
  
  crearUsuario({ nombre, apellido, nombreUsuario, contrasenia }) {
    const hash = crypto.createHash("sha256");
    console.log("01", hash);
    hash.update(contrasenia);
    console.log("02", hash);

    const hash_save = crypto.pepeHongo(contrasenia);

    const hashCrypto = crypto.cre
    console.log("03", hash_save);
    const usuario = {
      nombre,
      apellido,
      nombreUsuario,
      contrasenia: hash_save,
    };
    UsersManager.usuarios.push(usuario);
  }
  mostrarUsuarios() {
    console.log(UsersManager.usuarios);
  }
  validarUsuarios(nombreUsuario, contrasenia) {
    const user = UsersManager.usuarios.find(
      (u) => u.nombreUsuario === nombreUsuario
    );
    if (!user) {
      console.log("Usuario no encontrado");
      return;
    }
    const hash = crypto.createHash("sha256");
    hash.update(contrasenia);
    const hash_save = hash.digest("hex");

    if (hash_save === user.contrasenia) {
      console.log("LOGUEADO");
    } else {
      console.log("CONTRASEÑA INCORRECTA");
    }
  }
}

console.log("UsersManager.usuarios -> ", UsersManager.usuarios);

const userTest = new UsersManager();
console.log("userTest -> ", userTest); // UsersManager {usuarios, crearUsuario()}

userTest.crearUsuario({
  nombre: "Toto",
  apellido: "Lopez",
  nombreUsuario: "Toto",
  contrasenia: "1234",
});

userTest.mostrarUsuarios();
userTest.validarUsuarios("Toto", "1234");
userTest.validarUsuarios("Toto", "wewe");
