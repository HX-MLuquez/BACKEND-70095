const express = require("express");
const ejs = require("ejs");
const app = express();

const PORT = 8080;

app.set("view engine", "ejs");

app.get("/fufu/:nombre", (req, res) => {
  const {nombre} = req.params;
  res.render('plantilla', {nombre})
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
