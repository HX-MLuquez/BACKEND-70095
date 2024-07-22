class Persona {
  static contador = 0
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.count= 0
  }
  ver_nombre(){
    this.count += 1
    Persona.contador += 1
    return this.nombre
  }
}
console.log(Persona) // [class Persona]
/*
Persona {
    nombre:
    edad:                         Atributos o Propiedades
    --------------
    ver_nombre: f()               Métodos
}


*/

//TODO: INSTANCIA
var personita1 = new Persona("Mau", 23)

console.log(personita1) // Persona { nombre: 'Mau', edad: 23 }

console.log(personita1.ver_nombre())
