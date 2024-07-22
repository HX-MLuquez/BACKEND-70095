const list = ["juan", "manolo", "dilma"];
var id = 101;
async function listar() {
  console.log("Bienvenidos");
  list.forEach(async (user) => {
    const nombre =await new Promise((res) => {
      setTimeout(() => res(user), 1000);
    });
    id = 5040;
    console.log(nombre);
  });
  console.log("Nos vemos");
}

console.log("FIN");
console.log("id", id);

var queEs = listar();
console.log(queEs); // PENDING
