const express = require("express");
const router = express.Router()

const products = [];
router.post("/", (req, res) => {
  // req.params {id} - "/users/:id"
  // req.query {id_client} =234
  // req.body {}
  const product = req.body;
  products.push(product);
  res.status(201).json(product);
});


module.exports = router