const user = require("../models/user.model");

const listUsers = async (req, res) => {
  try {
    const users = await user.find({ is_active: true, is_deleted: false }); // Optional filter
    console.log("users", users);
    return res.status(200).json({
      message: "User list get successfully",
      data: users,
    });
  } catch (error) {
    console.error("User list get error:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  listUsers,
};
