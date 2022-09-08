const router = require("express").Router();
const {
  personal,
  address,
  qulification,
  perfrance,
  document,
  getJobsByEmail,
  checkApplyStatus,
} = require("../apis/datas/apply");
const {
  createDigital,
  getDigitals,
  getDigital,
  deleteDigital,
} = require("../apis/datas/digital");
const { createFAQ, getFAQ, deleteFAQ } = require("../apis/datas/faq");
const { createJob, getJob, deleteJob, getJobs } = require("../apis/datas/Job");
const {
  getJobApplicants,
  getJobApplicantById,
} = require("../apis/datas/jobapplies");
const { createLead, getLeads } = require("../apis/datas/leads");
const {
  createNews,
  getNews,
  deleteNews,
  getAllNews,
} = require("../apis/datas/news");
const {
  getTrainingCenters,
  createTrainingCenters,
} = require("../apis/training centers");
const { getUsers } = require("../apis/users/list");
const {
  userSubscription,
  getSubscriptions,
} = require("../apis/users/subscription");

// users
router.get("/users", getUsers);

//job
router.post("/job", createJob);
router.get("/job", getJob);
router.delete("/job", deleteJob);
router.get("/jobs", getJobs);

// job applies
router.get("/jobapplicants", getJobApplicants);
router.get("/jobapplicants/:jobId", getJobApplicantById);

//faq
router.post("/faq", createFAQ);
router.get("/faq", getFAQ);
router.delete("/faq", deleteFAQ);
router.get("/faq", getFAQ);

//apply
router.post("/personal", personal);
router.post("/address", address);
router.post("/qulification", qulification);
router.post("/prefrance", perfrance);
router.post("/document", document);
router.post("/subscription", userSubscription);
router.get("/getJobsByEmail", getJobsByEmail);
router.get("/checkApplyStatus", checkApplyStatus);

//digital learning
router.post("/digital", createDigital);
router.get("/digitals", getDigitals);
router.get("/digital", getDigital);
router.delete("/digital", deleteDigital);

//news blog nnotifify
router.post("/news", createNews);
router.get("/news", getNews);
router.delete("/news", deleteNews);
router.get("/getAllNews", getAllNews);

// Leads
router.post("/leads", createLead);
router.get("/leads", getLeads);

// purchases
router.get("/subscriptions", getSubscriptions);

// training centers
router.get("/training-centers", getTrainingCenters);
router.post("/training-centers", createTrainingCenters);

module.exports = router;
