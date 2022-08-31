const JOBAPPLIES = require("../../models/JobApply");

const getJobApplicants = async (req, res) => {
  try {
    const jobapplicants = await JOBAPPLIES.find({}).populate("jobId", "title");
    return res.status(200).json({ msg: "new job afatched", jobapplicants });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "server error" });
  }
};

module.exports = {
  getJobApplicants,
};
