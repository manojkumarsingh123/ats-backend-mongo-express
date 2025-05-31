import jwt from "jsonwebtoken";
import Res from "../constant/messages.js"; // Your centralized messages
// import dotenv from "dotenv";
// dotenv.config();

const authMiddleware = (req, res, next) => {
  const JWT_SECRET = process.env.JWT_SECRET;
  console.log("JWT_SECRET:", JWT_SECRET); // Debugging line to check if JWT_SECRET is set
  const authHeader = req.headers.authorization;

  // Check if the header is present and starts with "Bearer "
  if (!authHeader?.startsWith("Bearer")) {
    return res.status(401).json({
      code: Res.status.unauthorized,
      message: Res.messages.token.auth_token_missing,
    });
  }

  const token = authHeader.startsWith("Bearer ")
    ? authHeader.split(" ")[1]
    : authHeader;
  console.log("token", token);

  try {
    // Verify token
    const decoded = jwt.verify(token, JWT_SECRET);

    // Attach user data to request
    req.user = decoded;

    next(); // Proceed to actual logic
  } catch (error) {
    console.error("Token verification error:", error);
    return res.status(401).json({
      code: Res.status.unauthorized,
      message: error.message || Res.messages.token.invalid_token,
    });
  }
};

export default authMiddleware;
