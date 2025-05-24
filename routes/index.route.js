const express = require("express");
const router = express.Router();

/** all routes */
const authRoute = require("./auth.routes");
const userRoute = require("./user.routes");
const jobConfigRoute = require("./jobConfig.routes");

router.use("/auth", authRoute);
router.use("/user", userRoute);
router.use("/job-config", jobConfigRoute);

module.exports = router;
