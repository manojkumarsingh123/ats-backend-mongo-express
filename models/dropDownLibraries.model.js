import mongoose from "mongoose";

const dropDownLibrarySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    companyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    isMandatory: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const DropDownLibrary = mongoose.model(
  "DropDownLibrary",
  dropDownLibrarySchema
);

export default DropDownLibrary;
