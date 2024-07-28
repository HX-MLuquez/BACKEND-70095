# GLITCH - DEPLOY NODE JS ERROR

## Error de node:path - const exphbs = require('express-handlebars');

### Solución, pasos:

1. Anexar al package.json 'engines' y modificar versión de 'express-handlebars'

```json
{
  "name": "websocket",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon src/index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.19.2",
    "express-handlebars": "^6.0.6",
    "nodemon": "^3.1.4",
    "socket.io": "^4.7.5"
  },
  "engines": {
    "node": ">=16.0.0"
  }
}
```

2. Volver a correr

```bash
npm install express-handlebars@6.0.6 nodemon
```

Junto con nodemon en mi caso ya que es lo que utilizo para levantar el server 3. Volver a correr

```bash
npm start
```

**Y si aparece el ERROR - Error: listen EADDRINUSE: address already in use :::8080**

```
Error: listen EADDRINUSE: address already in use :::8080
```

Sin necesidad de cortar. Verificar de no estar usando ese puero en otra app levantada.
Y de ser así. Solamente volver a editar el package.json dando una línea + al final para que tome los cambios.

```json
{
  "name": "websocket",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon src/index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.19.2",
    "express-handlebars": "^6.0.6",
    "nodemon": "^3.1.4",
    "socket.io": "^4.7.5"
  },
  "engines": {
    "node": ">=16.0.0"
  }
}

```

Y LISTO!!!

