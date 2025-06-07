import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // ✅ Global Mongoose Debug Logging

    mongoose.set(
      "debug",
      function (collectionName, method, query, doc, options) {
        console.log(`\n📘 Mongoose ${collectionName}.${method}`);
        console.log("🔍 Query:", JSON.stringify(query, null, 2));
        if (doc) console.log("📄 Doc:", JSON.stringify(doc, null, 2));
        if (options)
          console.log("⚙️ Options:", JSON.stringify(options, null, 2));
      }
    );

    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    console.log(`📂 Using database: ${conn.connection.name}`);
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
