const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const routes = require("./routes/index.route");

dotenv.config();
const app = express();

connectDB(); // Connect to MongoDB

app.use(express.json());

// Use Auth Routes
app.use("/api", routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
