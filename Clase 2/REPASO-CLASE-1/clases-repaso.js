//   [ [ CLASS ] constructor {lista_personas:[]  } métodos:{agregar_persona:f()}]
//! THIS
// INSTANCIA

function Personas(id = 1) {
  this.id = id;
  this.listaPersonas = [];
  this.pepe = "BNJA-8786";

  this.agregarPersona = function (persona) {
    this.listaPersonas.push(persona);
  };
  //   this.eliminarPersona = () => {
  //     this.pepe = 99;
  //     this.listaPersonas.pop();
  //     return "OK";
  //   };
}

Personas.prototype.eliminarPersona = function () {
  this.pepe = 99;
  this.listaPersonas.pop();
  return "OK";
};

console.log(Personas); // [Function: Personas] <-> [Class: Personas]

//! INSTANCIA
var personas1 = new Personas(5040);
console.log(personas1);
personas1.agregarPersona({ nombre: "Manolo", edad: 32 });
console.log(personas1);

//! OTRA INSTANCIA
var persona2 = new Personas();
console.log(persona2);

/*

OBJ - CLASS
Personas {
    listaPersonas: []                    <-  PROPIEDADES - ATRIBUTOS

    -----------------------------------------------
    agregarPersona: f()                  <-  FUNCIONES --> PROPIEDADES - ATRIBUTOS      METODOS
}

*/

//----------------------------------------------------------------------

class Persona {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = null;
  }
}

Persona.prototype.addEmail = function(email){
    this.email = email 
    return this
}

var person1 = new Persona("Manolo", "Lopez")
console.log(person1)
console.log(person1.addEmail("man@gmail.com"))
/*
OBJ - CLASS
Persona {
    nombre: ... argumento                   <-  PROPIEDADES - ATRIBUTOS
    apellido: ... argumento
    email: null
    -----------------------------------------------
    addEmail: f(value)    email =>  value    <-  FUNCIONES --> PROPIEDADES - ATRIBUTOS      METODOS
}

*/