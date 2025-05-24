import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import routes from "./routes/index.route.js";
import seedDatabase from "./seeder/seed.js"; // import seeder function

dotenv.config();
const app = express();

connectDB(); // Connect to MongoDB

// Run seeder AFTER DB connection
await seedDatabase();

app.use(express.json());

// Use Auth Routes
app.use("/api", routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
