const express = require("express");
const router = express.Router();
const { getJobConfigForm } = require("../controllers/jobConfig.controller");

/** user routes*/
router.get("/library/form", getJobConfigForm);

module.exports = router;
