import mongoose from "mongoose";
import Company from "../models/companies.model.js";
import FormLibrary from "../models/formLibraries.model.js";
import FormSection from "../models/formSection.model.js";
import FormSubSection from "../models/formSubSection.model.js";

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

    // Seed FormSection if empty
    const formSectionCount = await FormSection.countDocuments();
    console.log(`formSectionCount: ${formSectionCount}`);
    if (formSectionCount === 0) {
      await FormSection.insertMany([
        {
          formLibraryId: "683ad009053814e9b60863f6", // Replace with actual ObjectId if you're using Mongo refs
          name: "Job Details",
          sortOrder: 1,
          isEnabled: true,
          key: "job_details",
          companyId: "68319cf81c29490ff5dd62bc", // Replace with actual ObjectId if needed
          isDeleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          formLibraryId: "683ad009053814e9b60863f6",
          name: "Recruitment Team",
          sortOrder: 2,
          isEnabled: true,
          key: "recruitment_team",
          companyId: "68319cf81c29490ff5dd62bc",
          isDeleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          formLibraryId: "683ad009053814e9b60863f6",
          name: "Post & Promote",
          sortOrder: 3,
          isEnabled: true,
          key: "post_promote",
          companyId: "68319cf81c29490ff5dd62bc",
          isDeleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          formLibraryId: "683ad009053814e9b60863f6",
          name: "Candidate Evaluation",
          sortOrder: 4,
          isEnabled: true,
          key: "candidate_evaluation",
          companyId: "68319cf81c29490ff5dd62bc",
          isDeleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]);
      console.log("✅ FormSection seeded.");
    } else {
      console.log("ℹ️ FormSection already exist. Skipping seeding.");
    }

    // Seed FormSubSection if empty
    const formSubSectionCount = await FormSubSection.countDocuments();
    console.log(`formSubSectionCount : ${formSubSectionCount}`);
    if (formSubSectionCount === 0) {
      await FormSubSection.insertMany([
        {
          formSectionId: "684419b773fc23ac2204b65a",
          formLibraryId: "683ad009053814e9b60863f6",
          key: "internal",
          name: "Internal",
          sortOrder: 1,
          isEnabled: true,
          companyId: "68319cf81c29490ff5dd62bc",
          isDeleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          formSectionId: "684419b773fc23ac2204b65a",
          formLibraryId: "683ad009053814e9b60863f6",
          key: "external",
          name: "External",
          sortOrder: 2,
          isEnabled: true,
          companyId: "68319cf81c29490ff5dd62bc",
          isDeleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          formSectionId: "684419b773fc23ac2204b65b",
          formLibraryId: "683ad009053814e9b60863f6",
          key: "internal",
          name: "Internal Team",
          sortOrder: 3,
          isEnabled: true,
          companyId: "68319cf81c29490ff5dd62bc",
          isDeleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          formSectionId: "684419b773fc23ac2204b65b",
          formLibraryId: "683ad009053814e9b60863f6",
          key: "external",
          name: "External Team",
          sortOrder: 4,
          isEnabled: true,
          companyId: "68319cf81c29490ff5dd62bc",
          isDeleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          formSectionId: "684419b773fc23ac2204b65c",
          formLibraryId: "683ad009053814e9b60863f6",
          key: "career_job_config_basic",
          name: "Job Config Basic",
          sortOrder: 5,
          isEnabled: true,
          companyId: "68319cf81c29490ff5dd62bc",
          isDeleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          formSectionId: "684419b773fc23ac2204b65c",
          formLibraryId: "683ad009053814e9b60863f6",
          key: "career_job_config_advance",
          name: "Job Config Advance",
          sortOrder: 6,
          isEnabled: true,
          companyId: "68319cf81c29490ff5dd62bc",
          isDeleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          formSectionId: "684419b773fc23ac2204b65c",
          formLibraryId: "683ad009053814e9b60863f6",
          key: "career_job_applicant",
          name: "Job Applicant",
          sortOrder: 7,
          isEnabled: true,
          companyId: "68319cf81c29490ff5dd62bc",
          isDeleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          formSectionId: "684419b773fc23ac2204b65c",
          formLibraryId: "683ad009053814e9b60863f6",
          key: "career_application_received",
          name: "Application Received",
          sortOrder: 8,
          isEnabled: false,
          companyId: "68319cf81c29490ff5dd62bc",
          isDeleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          formSectionId: "684419b773fc23ac2204b65c",
          formLibraryId: "683ad009053814e9b60863f6",
          key: "career_application_reject",
          name: "Application Reject",
          sortOrder: 9,
          isEnabled: false,
          companyId: "68319cf81c29490ff5dd62bc",
          isDeleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          formSectionId: "684419b773fc23ac2204b65d",
          formLibraryId: "683ad009053814e9b60863f6",
          key: "candidate_evaluation_questionary",
          name: "Questionary",
          sortOrder: 10,
          isEnabled: false,
          companyId: "68319cf81c29490ff5dd62bc",
          isDeleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          formSectionId: "684419b773fc23ac2204b65d",
          formLibraryId: "683ad009053814e9b60863f6",
          key: "candidate_evaluation_scorecard",
          name: "Scorecard",
          sortOrder: 11,
          isEnabled: false,
          companyId: "68319cf81c29490ff5dd62bc",
          isDeleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]);
      console.log("✅ FormSection seeded.");
    } else {
      console.log("ℹ️ FormSection already exist. Skipping seeding.");
    }
  } catch (error) {
    console.error("❌ Seeding error:", error);
  }
};

export default seedDatabase;
