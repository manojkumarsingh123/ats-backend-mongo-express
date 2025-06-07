import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    companyId: {
      type: mongoose.Schema.Types.ObjectId, // Foreign key reference
      ref: "Company", // Referenced model name
      default: null, // Allow null
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
    timestamps: true,
  }
);

// Virtual 'id' field for easier usage instead of '_id'
userSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

// Customize JSON output: include virtuals, remove _id and password
userSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: (_, ret) => {
    delete ret._id;
    delete ret.password;
  },
});

const user = mongoose.model("User", userSchema);

export default user;
