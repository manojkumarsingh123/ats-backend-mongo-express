import jobDescription from "../models/jobDescription.model.js";
import Res from "../constant/messages.js";

// Add job description
export const addJobDescription = async (req, res) => {
  console.log("addJobDescription controller started");
  try {
    const { name, description } = req.body;
    console.log("params", name, description);

    const data = await jobDescription.create({
      name,
      description,
      companyId: req.user.companyId,
    });
    return res.status(Res.status.create).json({
      message: "Job Description added successfully",
      data: data,
    });
  } catch (error) {
    console.log("Error in addJobDescription controller", error);
    return res.status(Res.status.internal_server_error).json({
      code: Res.status.internal_server_error,
      message: Res.messages.internal_server_error,
    });
  }
};

// Get list of job description data
export const listJobDescription = async (req, res) => {
  console.log("listJobDescription controller started");
  try {
    // Get list of job description data
    const data = await jobDescription.find({
      isDeleted: false,
    });
    return res.status(Res.status.success).json({
      message: "Job Description List fetch successfully",
      data: data,
    });
  } catch (error) {
    console.log("Error in listJobDescription controller", error);
    return res.status(Res.status.internal_server_error).json({
      code: Res.status.internal_server_error,
      message: Res.messages.internal_server_error,
    });
  }
};

// Get job description by id
export const jobDescriptionById = async (req, res) => {
  console.log("jobDescriptionById controller started");
  try {
    console.log("req", req.params.id);
    const data = await jobDescription.findById({
      _id: req.params.id,
      isDeleted: false,
    });
    return res.status(Res.status.success).json({
      message: "Job Description fetch successfully",
      data: data,
    });
  } catch (error) {
    console.log("Error in jobDescriptionById controller", error);
    return res.status(Res.status.internal_server_error).json({
      code: Res.status.internal_server_error,
      message: Res.messages.internal_server_error,
    });
  }
};
