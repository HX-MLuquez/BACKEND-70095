// {}  []

var products = {
    //* KEY debe ser única
    // KEY : VALUE  (clave : valor)
    tv_honda: 4,
    tablet_sasa: 2,
    celular_sisi: 1,
    tv_honda: "holis"
}

var objeto2 = {
    tv_honda: 134,
    tablet_sasa: 2123,
    celular_sisi: 199
}

console.log(products)

var list_cars = ["ford", "fiat", "bmw"]

console.log(typeof products) // object -> OBJETO

console.log(typeof list_cars) // object -> ARRAY

console.log(Array.isArray(products)) // false
console.log(Array.isArray(list_cars)) // true

console.log(list_cars.length) // 3

//                 0        1       2
var list_cars = ["ford", "fiat", "bmw"]

// list_cars = "sdklfmaskfa"
// console.log(list_cars)
//* CLIENT JS
list_cars.push("wewe")
console.log(list_cars) 

list_cars.push = function(){
    return "ahora ya no está más el viejo push"
}

console.log(list_cars.push())

console.log(list_cars) // [ 'ford', 'fiat', 'bmw', 'wewe', push: [Function (anonymous)] ]

var productsOriginal = {} // camel

//* BACK - API  JS

var products_old = {} // snake

products_old.saluda = function(){
    console.log("chis chis")
}
products_old.saluda()

console.log(products_old)
//                     3
for (let i = 0; i < list_cars.length; i++) {
    const element = list_cars[i];
    console.log(list_cars[i])
}

for (const key in products) {
    console.log(key)
    console.log(products[key])
}
