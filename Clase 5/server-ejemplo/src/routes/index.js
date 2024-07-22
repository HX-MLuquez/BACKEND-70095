const express = require("express");
const router = express.Router()

const usersRouter = require("./user.router")
const productsRouter = require("./product.router")

router.use("/users", usersRouter)
router.use("/products", productsRouter)

module.exports = router