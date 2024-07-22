const express = require("express");
const app = express();
const routes = require("./routes"); // index.js


app.use(express.json()) // {} por body es de lectura

app.get("/", (req, res) => {
  res.json({ API: "BACKEND" });
});

app.use("/api", routes)


module.exports = app

