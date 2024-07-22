const express = require("express");
const router = express.Router()

const usersRouter = require("./users.router")
const petsRouter = require("./pets.router")

router.use("/users", usersRouter)
router.use("/pets", petsRouter)

module.exports = router