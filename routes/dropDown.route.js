import express from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
import { getDropDownList } from "../controllers/dropDown.controller.js";

const router = express.Router();
/** user routes*/
router.get("/list", authMiddleware, getDropDownList);

export default router;
