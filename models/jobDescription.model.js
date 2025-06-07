import mongoose from "mongoose";

const jobDescriptionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String, // or `type: mongoose.Schema.Types.Text` if you use a plugin
      required: true,
    },
    companyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      default: null,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true, // adds `createdAt` and `updatedAt`
  }
);

export default mongoose.model("JobDescription", jobDescriptionSchema);
