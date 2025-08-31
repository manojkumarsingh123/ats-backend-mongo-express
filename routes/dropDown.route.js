import express from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
import {
  getDropDownList,
  listDropDownValue,
} from "../controllers/dropDown.controller.js";

const router = express.Router();
/** drop down routes*/
router.get("/list", authMiddleware, getDropDownList);

router.get("/:id/value/list", authMiddleware, listDropDownValue);

export default router;
