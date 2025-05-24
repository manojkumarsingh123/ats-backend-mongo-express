const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/auth.controller");
const {
  registerSchema,
  loginSchema,
} = require("../validations/auth.validator");
const validate = require("../middlewares/validate");

/** auth routes*/
router.post("/register", validate(registerSchema), registerUser);
router.post("/login", validate(loginSchema), loginUser);

module.exports = router;
