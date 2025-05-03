const express = require("express");
const router = express.Router();
const { listUsers } = require("../controllers/user.controller");

/** user routes*/
router.get("/users", listUsers);

module.exports = router;
