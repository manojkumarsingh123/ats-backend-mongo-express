import user from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Res from "../constant/messages.js";

export const registerUser = async (req, res) => {
  const { name, email, password, companyId } = req.body;

  try {
    // Check if user already exists
    const existingUser = await user.findOne({
      email,
      isDeleted: false,
      isActive: true,
    });
    if (existingUser) {
      return res.status(Res.status.bad_request).json({
        code: Res.status.bad_request,
        message: Res.messages.login.email_exist,
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save new user
    const newUser = new user({
      name,
      email,
      password: hashedPassword,
      companyId,
    });

    await newUser.save();

    // Return user (excluding password)
    return res.status(Res.status.create).json({
      code: Res.status.create,
      message: "User registered successfully",
      data: {
        user: {
          id: newUser._id,
          name: newUser.name,
          email: newUser.email,
          companyId: newUser.companyId,
        },
      },
    });
  } catch (error) {
    console.error("Registration error:", error);
    return res.status(Res.status.internal_server_error).json({
      code: Res.status.internal_server_error,
      message: Res.messages.internal_server_error,
    });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const JWT_SECRET = process.env.JWT_SECRET;
    console.log("JWT_SECRET login:", JWT_SECRET);
    // Check if user already exists
    const existingUser = await user.findOne({
      email,
      isDeleted: false,
      isActive: true,
    });
    if (!existingUser) {
      return res.status(Res.status.bad_request).json({
        code: Res.status.bad_request,
        message: Res.messages.user.user_not_found,
      });
    }

    // Compare password
    const isMatchPassword = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isMatchPassword) {
      return res.status(Res.status.bad_request).json({
        code: Res.status.bad_request,
        message: Res.messages.login.invalid_email_password,
      });
    }

    // Generate token
    const token = jwt.sign(
      {
        id: existingUser._id,
        email: existingUser.email,
        companyId: existingUser.companyId,
      },
      JWT_SECRET,
      { expiresIn: "24h" } // token expiry time
    );

    // Send response with token
    return res.status(Res.status.success).json({
      code: Res.status.success,
      message: Res.messages.login.login_success,
      data: {
        token,
        user: {
          id: existingUser._id,
          name: existingUser.name,
          email: existingUser.email,
          companyId: existingUser.companyId,
        },
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(Res.status.internal_server_error).json({
      code: Res.status.internal_server_error,
      message: Res.messages.internal_server_error,
    });
  }
};
