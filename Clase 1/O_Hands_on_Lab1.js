// function mostrarLista

function mostrarLista(lista) {
  if (lista.length === 0) {
    return "La lista está vacía";
  }
  for (let i = 0; i < lista.length; i++) {
    console.log(lista[i]);
  }
  return lista.length;
}


var ejemplo = [4,73,2,4,"huuu"]

console.log(mostrarLista(ejemplo))

console.log(mostrarLista([]))