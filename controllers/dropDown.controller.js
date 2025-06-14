import dropDownLib from "../models/dropDownLibraries.model.js";
import Res from "../constant/messages.js";
import { getPagination, getPaginationResponse } from "../utils/pagination.js";

export const getDropDownList = async (req, res) => {
  try {
    // Get pagination parameters
    const { page, limit, offset } = getPagination(req.query);
    console.log("page ,limit ,offset", page, limit, offset);
    console.log("getDropDownList controller started");
    console.log("req.user", req.user);
    // find out all drop down list
    const filter = { isDeleted: false, companyId: req.user.companyId };
    if (req.query.is_system_defined_field) {
      filter.isMandatory = req.query.is_system_defined_field;
    }
    console.log("filter", filter);
    const dropDownList = await dropDownLib
      .find(filter)
      .skip(offset)
      .limit(limit);
    const count = await dropDownLib.countDocuments(filter); // A Mongoose method that counts documents matching the given filter without retrieving them.
    console.log("dropDownList", dropDownList);
    console.log("count", count);

    if (dropDownList && dropDownList.length > 0) {
      return res.status(Res.status.success).json({
        code: Res.status.success,
        message: Res.messages.drop_down.drop_down_list_fetched_successfully,
        ...getPaginationResponse(dropDownList, count, page, limit),
      });
    } else {
      return res.status(Res.status.not_found).json({
        code: Res.status.not_found,
        message: "No drop down list found",
        data: [],
      });
    }
  } catch (error) {
    console.error("Error in getDropDownList controller ", error);
    return res.status(Res.status.internal_server_error).json({
      code: Res.status.internal_server_error,
      message: error?.message || Res.messages.internal_server_error,
    });
  }
};
