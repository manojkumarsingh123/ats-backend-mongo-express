const mongoose = require("mongoose");

const formLibrarySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    company_id: {
      type: mongoose.Schema.Types.ObjectId, // Assuming Company has an ObjectId
      ref: "Company",
      default: null, // Use `null` to match Sequelize's `allowNull: true`
    },
    is_enabled: {
      type: Boolean,
      default: true,
    },
    is_deleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true, // This automatically adds `createdAt` and `updatedAt`
  }
);

module.exports = mongoose.model("FormLibrary", formLibrarySchema);
