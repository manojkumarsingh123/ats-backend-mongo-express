import mongoose from "mongoose";

const dropDownValueSchema = new mongoose.Schema(
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
    dropdownId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "DropDownLibrary",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const DropDownValue = mongoose.model("DropDownValue", dropDownValueSchema);

export default DropDownValue;
