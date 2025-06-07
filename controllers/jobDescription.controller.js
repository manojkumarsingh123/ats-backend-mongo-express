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
      code: Res.status.create,
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
      code: Res.status.success,
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
    const data = await jobDescription.findOne({
      _id: req.params.id,
      isDeleted: false,
    });
    return res.status(Res.status.success).json({
      code: Res.status.success,
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

// Remove job description
export const removeJobDescription = async (req, res) => {
  console.log("removeJobDescription controller started");
  try {
    console.log("req", req.params.id);

    // check data is deleted or not
    const fetchData = await jobDescription.findOne({
      _id: req.params.id,
      isDeleted: false,
    });

    console.log("fetchData", fetchData);

    if (fetchData?.isDeleted === true) {
      return res.status(Res.status.bad_request).json({
        message: "Job Description already removed",
      });
    }

    // soft delete job description
    const data = await jobDescription.findByIdAndUpdate(
      req.params.id,
      {
        isDeleted: true,
      },
      { new: true } // return the updated document);
    );

    // If data fails to update
    if (!data) {
      return res.status(Res.status.internal_server_error).json({
        message: Res.status.internal_server_error,
      });
    }

    return res.status(Res.status.success).json({
      code: Res.status.success,
      message: "Job Description removed successfully",
    });
  } catch (error) {
    console.log("Error in removeJobDescription controller", error);
    return res.status(Res.status.internal_server_error).json({
      code: Res.status.internal_server_error,
      message: Res.messages.internal_server_error,
    });
  }
};

// Update job description
export const updateJobDescription = async (req, res) => {
  console.log("updateJobDescription controller started");
  try {
    console.log("req", req.params.id);
    console.log("body", req.body);

    // check data is deleted or not
    const fetchData = await jobDescription.findOne({
      _id: req.params.id,
      isDeleted: false,
    });

    console.log("fetchData", fetchData);
    if (!fetchData) {
      return res.status(Res.status.not_found).json({
        message: "Job Description not found",
      });
    }

    // prepare update payload
    let updatePayload = {};
    if (req.body.name) {
      updatePayload.name = req.body.name;
    }
    if (req.body.description) {
      updatePayload.description = req.body.description;
    }

    // update job description
    if (Object.keys(updatePayload).length != 0) {
      const data = await jobDescription.findByIdAndUpdate(
        { _id: req.params.id, isDeleted: false },
        updatePayload,
        { new: true } // return the updated document);
      );
      console.log("data", data);
    }
    return res.status(Res.status.success).json({
      code: Res.status.success,
      message: "Job Description updated successfully",
    });
  } catch (error) {
    console.log("Error in updateJobDescription controller", error);
    return res.status(Res.status.internal_server_error).json({
      code: Res.status.internal_server_error,
      message: Res.messages.internal_server_error,
    });
  }
};

// Update job description active status
export const updateJobDescriptionStatus = async (req, res) => {
  console.log("updateJobDescriptionStatus controller started");
  try {
    console.log("req", req.params.id);
    console.log("body", req.body);

    // check data is deleted or not
    const fetchData = await jobDescription.findOne({
      _id: req.params.id,
      isDeleted: false,
    });

    console.log("fetchData", fetchData);
    if (!fetchData) {
      return res.status(Res.status.not_found).json({
        message: "Job Description not found",
      });
    }

    // update job description status

    const data = await jobDescription.findByIdAndUpdate(
      { _id: req.params.id, isDeleted: false },
      { isActive: req.body.isActive }, // Assuming isActive is a boolean field
      { new: true } // return the updated document);
    );
    console.log("data", data);

    return res.status(Res.status.success).json({
      code: Res.status.success,
      message: "Job Description status updated successfully",
      data: data,
    });
  } catch (error) {
    console.log("Error in updateJobDescriptionStatus controller", error);
    return res.status(Res.status.internal_server_error).json({
      code: Res.status.internal_server_error,
      message: Res.messages.internal_server_error,
    });
  }
};
