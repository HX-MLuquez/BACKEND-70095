//! NO en NODE import pepe from './calculadora.js'
const Calculadora = require('./calculadora.js')
// console.log(pepe) // [class Calculadora]


async function ejemplo(){
    const data = await import('./calculadora.js')
    console.log(data) // { default: [class Calculadora] }
    const {default:Calculadora} = await import('./calculadora.js')
    console.log(Calculadora) // [class Calculadora]
    var calc1 = new Calculadora()
    console.log(calc1.restar(5,2))
}

ejemplo()