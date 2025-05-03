const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    company_id: {
      type: mongoose.Schema.Types.ObjectId, // <-- FK reference
      ref: "Company", // <-- model name of the referenced schema
      default: null, // <-- or set to a specific ObjectId
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    is_active: {
      type: Boolean,
      default: true,
    },
    is_deleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// Mongoose automatically assigns a unique _id (as ObjectId) for each document
// But you can create a virtual `id` field that’s easier to work with

userSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

userSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: (_, ret) => {
    delete ret._id;
    delete ret.password; // remove password from output
  },
});

const user = mongoose.model("user", userSchema);

module.exports = user;
