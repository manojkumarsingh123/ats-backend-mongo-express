import User from "../models/user.model.js";
import Res from "../constant/messages.js";

export const listUsers = async (req, res) => {
  try {
    const users = await User.find({ isActive: true, isDeleted: false }); // Optional filter
    console.log("users", users);
    return res.status(Res.status.success).json({
      code: Res.status.success,
      message: "User list fetched successfully",
      data: users,
    });
  } catch (error) {
    console.error("User list fetch error:", error);
    return res.status(500).json({ message: "Server error" });
  }
};
