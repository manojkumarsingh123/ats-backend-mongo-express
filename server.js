import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectDB from "./config/db.js";
import routes from "./routes/index.route.js";
import seedDatabase from "./seeder/seed.js";

const app = express();

const startServer = async () => {
  await connectDB(); // Connect to MongoDB
  await seedDatabase(); // Seed data after DB connection

  app.use(express.json());
  app.use("/api", routes);

  const PORT = 6000;
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
};

startServer().catch((error) => {
  console.error("Failed to start server:", error);
});
