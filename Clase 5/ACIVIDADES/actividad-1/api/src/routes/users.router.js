const express = require("express");
const router = express.Router()

const users = [];

router.post("/", (req, res) => {
  // req.params {id} - "/users/:id"
  // req.query {id_client} =234
  // req.body {}
  const user = req.body;
  users.push(user);
  res.status(201).json(user);
});


module.exports = router
