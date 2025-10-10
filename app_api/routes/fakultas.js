const express = require("express")
const router = express.Router();

const fakultasController = require("../controllers/fakultasControllers")

router.get("/", fakultasController.getAllFakultas)
module.exports = router