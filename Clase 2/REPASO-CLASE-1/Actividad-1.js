const objetos = [
  {
    manzanas: 3,
    peras: 2,
    carne: 1,
    jugos: 5,
    dulces: 2,
  },
  {
    manzanas: 1,
    sandias: 1,
    huevos: 6,
    jugos: 1,
    panes: 4,
  },
];
const list_products = []


objetos.forEach((element)=>{
    // console.log(element)
    Object.keys(element).forEach((prod)=>{
        console.log(prod)
        if(!list_products.includes(prod)){ // TRUE
            list_products.push(prod)
        }
    })
})
console.log(list_products)

var total = 0           //   0    1
objetos.forEach((e)=>{ //  [{ }, { }] ->  [3,2,1,5,2] - > [11,6,1,4]
    Object.values(e).forEach((v)=>{  
        total += v
    })
})

console.log(total)
