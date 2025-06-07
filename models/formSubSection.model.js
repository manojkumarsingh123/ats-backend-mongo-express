import mongoose from "mongoose";

const formSubSectionSchema = new mongoose.Schema(
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
    formSectionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "FormSection",
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
    timestamps: true, // adds createdAt and updatedAt
  }
);

const FormSubSection = mongoose.model("FormSubSection", formSubSectionSchema);

export default FormSubSection;
