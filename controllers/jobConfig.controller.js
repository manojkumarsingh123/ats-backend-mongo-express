const form = require("../models/formLibraries.model");
const Res = require("../constant/messages");

const getJobConfigForm = async (req, res) => {
  try {
    console.log("getJobConfigForm started");
    // find out all form list
    const formList = await form.find({ is_enabled: true, is_deleted: false });
    console.log("formList", formList);
    if (formList && formList.length > 0) {
      return res.status(200).json({
        message: Res.messages.job_config.get_form_list,
        data: formList,
      });
    }
  } catch (error) {
    console.error("Error in getJobConfigForm:", error);
    return res.status(500).json({
      message: error?.message || Res.messages.internal_server_error,
      code: Res.status.internal_server_error,
    });
  }
};

module.exports = {
  getJobConfigForm,
};
