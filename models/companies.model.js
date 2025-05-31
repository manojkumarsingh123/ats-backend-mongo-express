import mongoose from "mongoose";

const companySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phoneNo: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
      default: null, // optional logo
    },
    companyDomain: {
      type: String,
      default: null, // optional domain
    },
    isDeleted: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true, // adds createdAt & updatedAt
  }
);

const Company = mongoose.model("Company", companySchema);

export default Company;
