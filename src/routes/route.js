const express = require("express");
const Controller = require("../controller/Controller");
const router = express.Router();

router.get("/routeRequest", Controller.status);

module.exports = router;