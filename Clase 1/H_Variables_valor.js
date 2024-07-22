

var nombre = "Pepe"

var edad = 37 

edad = edad + 1

console.log(edad)

edad += 1 // === edad = edad + 1

console.log(edad)

var peliculas = ["Hulk", "Superman", "La mosca"]

console.log(peliculas.length)

console.log(peliculas[2])

peliculas.map((e)=>{
    console.log(e)
})

for (let index = 0; index < peliculas.length; index++) {
    console.log(peliculas[index])
}


var users = {
    0: "Miguel",
    1: "Juan",
    2: "Manuel",
    list: [1,2],
    code: 101
}

//* OBJETO OBJETO para acceder a sus valores usamos DOT NOTATION || BRACKET NOTATION
console.log(users[0])


var swap = true 
console.log(!swap)

/*
Un perro no tiene 4 patas

V  F
   F

Un perro tiene 4 patas   ->   NOT
V                        -> F


*/


