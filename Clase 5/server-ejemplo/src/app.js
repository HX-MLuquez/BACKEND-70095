const express = require("express");
const app = express();
const routes = require("./routes"); // index.js

const ProductManager = require("./controllers/ProductManager"); 

app.use(express.json()) // {} por body es de lectura


const productsManager = new ProductManager()

app.get("/", (req, res) => {
  res.json({ API: "BACKEND" });
});



/*
*MODELO 1
function allProduct(req, res){
  res.json(products);
}
app.get("/products", allProduct);
*/

//* MODELO 2

// async function allProduct(){ //* MODULARIZAMOS
//   // busca en archivo
//   return products
// }

app.get("/products", async (req, res) => {
  const products = await productsManager.allProducts()
  res.json(products);
});

app.use("/api", routes)


module.exports = app

