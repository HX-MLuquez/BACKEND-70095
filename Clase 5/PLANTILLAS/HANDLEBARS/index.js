const express = require("express");
const app = express();

const handlebars = require('express-handlebars');
const path = require("path");

const PORT = 8080;

//* SETEO handlebars
app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, 'views'));

app.get("/fufu/:nombre", (req, res) => {
  const { nombre } = req.params;
  const context = { 
    nombre: nombre !== 'false' ? nombre : null,
    style: "./"
  };
  return res.render('index', context);
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});