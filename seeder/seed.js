import mongoose from "mongoose";
import Company from "../models/companies.model.js";
import FormLibrary from "../models/formLibraries.model.js";

const seedDatabase = async () => {
  try {
    // Seed Companies if empty
    const companyCount = await Company.countDocuments();
    console.log(`Company count: ${companyCount}`);
    if (companyCount === 0) {
      await Company.insertMany([
        {
          name: "Myslice_ATS",
          phoneNo: "23-456-7890",
          address: "123 Tech Street, Silicon Valley, CA",
          country: "USA",
          logo: "logo1.png",
          companyDomain: "techcorp.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]);
      console.log("✅ Companies seeded.");
    } else {
      console.log("ℹ️ Companies already exist. Skipping seeding.");
    }

    // Seed FormLibraries if empty
    const formCount = await FormLibrary.countDocuments();
    console.log(`formCount: ${formCount}`);
    if (formCount === 0) {
      await FormLibrary.insertMany([
        {
          name: "Job Config Form",
          // Ideally link company_id to the company created above
          companyId: "68319cf81c29490ff5dd62bc", // or you can fetch the company _id here dynamically
          isEnabled: true,
          isDeleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]);
      console.log("✅ FormLibraries seeded.");
    } else {
      console.log("ℹ️ FormLibraries already exist. Skipping seeding.");
    }
  } catch (error) {
    console.error("❌ Seeding error:", error);
  }
};

export default seedDatabase;
