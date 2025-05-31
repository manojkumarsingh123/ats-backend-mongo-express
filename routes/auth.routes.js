import express from "express";
const router = express.Router();

import { registerUser, loginUser } from "../controllers/auth.controller.js";
import { registerSchema, loginSchema } from "../validations/auth.validator.js";
import validate from "../middlewares/validate.js";

/** auth routes */
router.post("/register", validate(registerSchema), registerUser);
router.post("/login", validate(loginSchema), loginUser);

export default router;
