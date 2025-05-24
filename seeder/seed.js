const mongoose = require("mongoose");
const Company = require("../models/companies.model");
const FormLibrary = require("../models/formLibraries.model");

const seedDatabase = async () => {
  try {
    // Seed Companies if empty
    const companyCount = await Company.countDocuments();
    if (companyCount === 0) {
      await Company.insertMany([
        {
          name: "Myslice_ATS",
          phone_no: "123-456-7890",
          from_email_name: "Tech Support",
          from_email: "support@techcorp.com",
          address: "123 Tech Street, Silicon Valley, CA",
          country: "USA",
          logo: "logo1.png",
          company_domain: "techcorp.com",
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
    if (formCount === 0) {
      await FormLibrary.insertMany([
        {
          name: "Job Config Form",
          // Ideally link company_id to the company created above
          company_id: "68319cf81c29490ff5dd62bc", // or you can fetch the company _id here dynamically
          is_enabled: true,
          is_deleted: false,
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

module.exports = seedDatabase;
