import express from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
import { getJobConfigForm } from "../controllers/jobConfig.controller.js";

const router = express.Router();
/** user routes*/
router.get("/library/form", authMiddleware, getJobConfigForm);

export default router;
