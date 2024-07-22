const express = require("express");
const router = express.Router()

const pets = [];
router.post("/", (req, res) => {
  // req.params {id} - "/users/:id"
  // req.query {id_client} =234
  // req.body {}
  const pet = req.body;
  pets.push(pet);
  res.status(201).json(pet);
});


module.exports = router