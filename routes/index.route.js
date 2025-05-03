const express = require("express");
const router = express.Router();

/** all routes */
const authRoute = require("./auth.routes");

router.use("/auth", authRoute);

module.exports = router;
