import express from "express";
import {
  addJobDescription,
  listJobDescription,
  jobDescriptionById,
  removeJobDescription,
  updateJobDescription,
  updateJobDescriptionStatus,
} from "../controllers/jobDescription.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";
import {
  addJobDescriptionSchema,
  updateJobDescriptionSchema,
  updateJobDescriptionStatusSchema,
} from "../validations/jobDescription.validator.js";
import validate from "../middlewares/validate.js";

const router = express.Router();

/** job description routes */
router.post(
  "/add",
  validate(addJobDescriptionSchema),
  authMiddleware,
  addJobDescription
);

router.get("/list", authMiddleware, listJobDescription);

router.get("/:id", authMiddleware, jobDescriptionById);

router.delete("/:id/remove", authMiddleware, removeJobDescription);

router.patch(
  "/:id/update",
  validate(updateJobDescriptionSchema),
  authMiddleware,
  updateJobDescription
);

router.patch(
  "/:id/status",
  validate(updateJobDescriptionStatusSchema),
  authMiddleware,
  updateJobDescriptionStatus
);

export default router;
