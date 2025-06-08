import mongoose from "mongoose";

const formConfigurationFieldSchema = new mongoose.Schema(
  {
    formLibraryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "FormLibrary",
      required: true,
    },
    key: {
      type: String,
      required: true,
    },
    companyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      default: 1,
    },
    formSubSectionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "FormSubSection",
      required: true,
    },
    formSectionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "FormSection",
      required: true,
    },
    sortOrder: {
      type: Number,
      required: true,
    },
    gridGroup: {
      type: Number,
      required: true,
    },
    labelName: {
      type: String,
      required: true,
    },
    display_name: String,
    fieldType: {
      type: String,
      enum: [
        "text",
        "textarea",
        "number",
        "email",
        "date",
        "dropdown",
        "multichoice",
        "radio",
        "boolean",
        "range",
        "file",
        "video",
      ],
      required: true,
    },
    isMultiSelect: {
      type: Boolean,
      default: false,
    },
    options: {
      type: mongoose.Schema.Types.Mixed,
    },
    isMultiUpload: {
      type: Boolean,
      default: false,
    },
    max_file_size: Number,
    allowedFileTypes: [String],
    isMandatory: {
      type: Boolean,
      default: false,
    },
    isSystemDefinedField: {
      type: Boolean,
      default: false,
    },
    isExcludeFromInternalFilter: {
      type: Boolean,
      default: false,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    isDraggabled: {
      type: Boolean,
      default: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    applicationReceivedSubject: {
      type: String,
      default: "",
    },
    applicationReceivedMessage: {
      type: String,
      default: "",
    },
    applicationRejectSubject: {
      type: String,
      default: "",
    },
    applicationRejectMessage: {
      type: String,
      default: "",
    },
    careerPageRecruiterId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    fileUrl: String,
    dropdownId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "DropDownLibrary",
    },
  },
  { timestamps: true }
);

const FormConfigurationField = mongoose.model(
  "FormConfigurationField",
  formConfigurationFieldSchema
);

export default FormConfigurationField;
