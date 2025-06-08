import mongoose from "mongoose";

const dropDownValueSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    created_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    updated_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    is_active: {
      type: Boolean,
      default: true,
    },
    company_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
    },
    is_deleted: {
      type: Boolean,
      default: false,
    },
    is_mandatory: {
      type: Boolean,
      default: false,
    },
    dropdown_id: {
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
