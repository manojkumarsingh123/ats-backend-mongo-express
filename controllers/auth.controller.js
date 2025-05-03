const user = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Res = require("../constant/messages");

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await user.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
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
    });

    await newUser.save();

    // Return user (excluding password)
    return res.status(201).json({
      code: Res.status.create,
      message: "User registered successfully",
      data: {
        user: {
          id: newUser._id,
          name: newUser.name,
          email: newUser.email,
        },
      },
    });
  } catch (error) {
    console.error("Registration error:", error);
    return res.status(500).json({
      code: Res.status.internal_server_error,
      message: Res.messages.internal_server_error,
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("email", email);
    const JWT_SECRET = process.env.JWT_SECRET || "ABC";

    // Check if user already exists
    const existingUser = await user.findOne({ email });
    if (!existingUser) {
      return res.status(400).json({
        code: Res.status.bad_request,
        message: Res.messages.user.user_not_found,
      });
    }

    //Compare password

    let isMatchPassword = bcrypt.compare(password, existingUser.password);
    if (!isMatchPassword) {
      return res.status(400).json({
        code: Res.status.bad_request,
        message: Res.messages.login.invalid_email_password,
      });
    }

    // Generate token
    const token = jwt.sign(
      { id: existingUser._id, email: existingUser.email },
      JWT_SECRET,
      { expiresIn: "1h" } // token expiry time
    );
    // Send response with token
    res.status(200).json({
      code: Res.status.bad_request,
      message: Res.messages.login.login_success,
      data: {
        token,
        user: {
          id: existingUser._id,
          name: existingUser.name,
          email: existingUser.email,
        },
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(400).json({
      code: Res.status.internal_server_error,
      message: Res.messages.internal_server_error,
    });
  }
};

module.exports = {
  registerUser,
  loginUser,
};
