import form from "../models/formLibraries.model.js";
import Res from "../constant/messages.js";
import { getPagination, getPaginationResponse } from "../utils/pagination.js";

export const getJobConfigForm = async (req, res) => {
  try {
    // Get pagination parameters
    const { page, limit, offset } = getPagination(req.query);
    console.log("page ,limit ,offset", page, limit, offset);
    console.log("getJobConfigForm controller started");
    // find out all form list
    const filter = {
      isEnabled: true,
      isDeleted: false,
      companyId: req.user.companyId,
    };
    const formList = await form.find(filter);
    const count = await form.countDocuments(filter).skip(offset).limit(limit); // A Mongoose method that counts documents matching the given filter without retrieving them.
    console.log("formList", formList);
    console.log("count", count);

    if (formList && formList.length > 0) {
      return res.status(Res.status.success).json({
        code: Res.status.success,
        message: Res.messages.job_config.get_form_list,
        ...getPaginationResponse(formList, count, page, limit),
      });
    } else {
      return res.status(Res.status.not_found).json({
        code: Res.status.not_found,
        message: "No enabled forms found",
        data: [],
      });
    }
  } catch (error) {
    console.error("Error in getJobConfigForm controller", error);
    return res.status(Res.status.internal_server_error).json({
      code: Res.status.internal_server_error,
      message: error?.message || Res.messages.internal_server_error,
    });
  }
};
