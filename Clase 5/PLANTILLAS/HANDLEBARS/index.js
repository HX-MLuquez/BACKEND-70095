const express = require("express");
const app = express();

const handlebars = require('express-handlebars');
const path = require("path");

const PORT = 8080;

//* SETEO handlebars
app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, 'views'));

app.get("/", (req, res) => {
  return res.json({"APP": "HANDLEBARS"});
});


app.get("/user/:nombre", (req, res) => {
  const { nombre } = req.params;
  const context = { 
    nombre: nombre !== 'false' ? nombre : null,
    style: "./"
  };
  return res.render('index', context);
});

app.get("/admin", (req, res) => {
  const isAdmin = true
  return res.render('admin', {isAdmin});
});
const products = [
  { title: "Producto 1", price: 100 },
  { title: "Producto 2", price: 200 },
  { title: "Producto 3", price: 300 }
];
app.get("/products", (req, res) => {
  return res.render('products', {products});
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});