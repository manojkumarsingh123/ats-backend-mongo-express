import express from "express";
import { listUsers } from "../controllers/user.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

/** user routes */
router.get("/users", authMiddleware, listUsers);

export default router;
