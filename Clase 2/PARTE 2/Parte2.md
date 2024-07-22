# Callbacks

### Definición:

Un callback es una función que se pasa como argumento a otra función para que se ejecute dentro de esta y se complete alguna operación.

### Ejemplo de uso de callback con map

### Explicación de map internamente

### Callback con operaciones matemáticas

### Convenciones de callbacks

### Callback anidado (Callback Hell)

## Promesas

### Definición:

Una promesa es un objeto que representa la eventual finalización (o falla) de una operación asincrónica y su valor resultante.

### Creación de una promesa

```javascript
const promesa = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve("Operación exitosa");
  } else {
    reject("Ocurrió un error");
  }
});

promesa
  .then((result) => {
    console.log(result); // Operación exitosa
  })
  .catch((error) => {
    console.error(error); // Ocurrió un error
  });
```

### Encadenamiento de promesas

### Async/Await

### Definición:

Async y await son palabras clave que facilitan el trabajo con código asincrónico basado en promesas, permitiendo escribir código que se lee de manera síncrona.

### Sincronismo vs Asincronismo

### Sincronismo

### Asincronismo

### Ejercicio asincrónico

