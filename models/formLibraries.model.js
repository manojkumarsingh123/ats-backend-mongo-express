import mongoose from "mongoose";

const formLibrarySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    companyId: {
      type: mongoose.Schema.Types.ObjectId, // Assuming Company has an ObjectId
      ref: "Company",
      default: null, // Use `null` to match Sequelize's `allowNull: true`
    },
    isEnabled: {
      type: Boolean,
      default: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true, // This automatically adds `createdAt` and `updatedAt`
  }
);

export default mongoose.model("FormLibrary", formLibrarySchema);
