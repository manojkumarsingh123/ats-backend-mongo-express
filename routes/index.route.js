import express from "express";
import authRoute from "./auth.routes.js";
import userRoute from "./user.routes.js";
import jobConfigRoute from "./jobConfig.routes.js";
import jobDescriptionTemplateRoute from "./jobDescription.route.js";
import dropDownRoute from "./dropDown.route.js";

const router = express.Router();

router.use("/auth", authRoute);
router.use("/user", userRoute);
router.use("/job-config", jobConfigRoute);
router.use("/job-description-templates", jobDescriptionTemplateRoute);
router.use("/drop-down", dropDownRoute);

export default router;
