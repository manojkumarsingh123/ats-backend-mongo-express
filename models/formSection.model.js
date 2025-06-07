import mongoose from "mongoose";

const formSectionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    formLibraryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "FormLibrary",
      required: true,
    },
    sortOrder: {
      type: Number,
      default: null,
    },
    isEnabled: {
      type: Boolean,
      required: true,
      default: true,
    },
    key: {
      type: String,
      required: true,
    },
    companyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      default: null,
    },
    isDeleted: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true, // automatically adds createdAt and updatedAt
  }
);

const FormSection = mongoose.model("FormSection", formSectionSchema);

export default FormSection;
