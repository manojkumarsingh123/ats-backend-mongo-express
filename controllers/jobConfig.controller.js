import form from "../models/formLibraries.model.js";
import Res from "../constant/messages.js";

export const getJobConfigForm = async (req, res) => {
  try {
    console.log("getJobConfigForm started");
    // find out all form list
    const formList = await form.find({ isEnabled: true, isDeleted: false });
    console.log("formList", formList);

    if (formList && formList.length > 0) {
      return res.status(Res.status.success).json({
        code: Res.status.success,
        message: Res.messages.job_config.get_form_list,
        data: formList,
      });
    } else {
      return res.status(Res.status.not_found).json({
        code: Res.status.not_found,
        message: "No enabled forms found",
        data: [],
      });
    }
  } catch (error) {
    console.error("Error in getJobConfigForm:", error);
    return res.status(Res.status.internal_server_error).json({
      code: Res.status.internal_server_error,
      message: error?.message || Res.messages.internal_server_error,
    });
  }
};
